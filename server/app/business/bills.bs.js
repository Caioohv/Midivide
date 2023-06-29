const status = require('../utils/status')

const houseRep = require('../repository/house.rep')
const userRep = require('../repository/user.rep')
const billsRep = require('../repository/bills.rep')
const debtsRep = require('../repository/debts.rep')

class House {
	constructor(req){
		this.req = req
		this.payload = req.body
		this.query = req.query
		this.params = req.params
		this.user = req.user
		this.houseDB = new houseRep()
		this.userDB = new userRep()
		this.billDB = new billsRep()
		this.debtDB = new debtsRep()
	}

	async create() {
		try{
			let current = this.req.user
			if(!current.house) throw { identifier: 'user not in a house'}

			let usersToShare = this.req.body.users_to_share

			if(!(usersToShare === 'all' || (Array.isArray(usersToShare) && usersToShare.length > 0))) 
				throw { identifier: 'need to share with at least one user'}
		
			if(!usersToShare.includes(current.id))
				usersToShare.push(current.id)			

			let users = await this.userDB.findByHouse(current.house)
			let houseUsers = users.map(user => user.id)


			for(let user of usersToShare){
				if(!houseUsers.includes(user)) 
					throw { identifier: 'user not in this house'}
			}

			let house_identifier = current.house
			let name = this.req.body.name
			let value = this.req.body.value
			let due_date = new Date(this.req.body.due_date)
			let destination = this.req.body.destination
			
			let shared_to = usersToShare.length

			let bill = await this.billDB.create(house_identifier, name, value, shared_to, due_date, destination)

			let debts = []

			for (let user of usersToShare) {
				debts.push({
					payer_user_id: user,
					bill_id: bill.id,
					paid: false
				})
			}

			await this.debtDB.bulkCreate(debts)
			
			return {
				value: value / shared_to
			} 

		}catch(err){
			throw {
				message: 'Ops! ocorreu um erro ao criar a conta!',
				identifier: err.identifier || 'duplicated property',
				status: status['INVALID-DATA']
			}
		}
	}

	async getMyBills() {
		try{
			let current = this.req.user
			
			let debts = await this.debtDB.findByPayerUserId(current.id)

			let myBills = {
				paid: [],
				unpaid: []
			}

			for(let debt of debts) {
				let bill = await this.billDB.findById(debt.bill_id)

				debt.value = bill.value / bill.shared_to
        debt.bill_data = bill

				if(debt.paid) myBills.paid.push(debt)
				else myBills.unpaid.push(debt)
			}

			return myBills

		}catch(err){
			throw {
				message: 'Ops! ocorreu um erro ao listar suas contas!',
				identifier: err.identifier || 'error listing bills',
				status: status['INVALID-DATA']
			}
		}
	}

	async getHouseBills() {
		try{
			let current = this.req.user
			
			let bills = await this.billDB.findByHouse(current.house)

			let response = {
				bills: []
			}

			for(let bill of bills){
				let debts = await this.debtDB.findByBillId(bill.id)

				bill.paid = []
				bill.unpaid = []


				for(let debt of debts) {
					let user = await this.userDB.findById(debt.payer_user_id)

					if(debt.paid) bill.paid.push(user)
					else bill.unpaid.push(user)
				}

				response.bills.push(bill)
			}

			return response


		}catch(err){
			console.log('\n','----------->err: ', (err))
			throw {
				message: 'Ops! ocorreu um erro ao listar suas contas!',
				identifier: err.identifier || 'error listing bills',
				status: status['INVALID-DATA']
			}
		}
	}

	async markAsPaid() {
		try{
			let current = this.req.user
			let debtId = this.req.params.bill_id

			return await this.debtDB.markAsPaid(debtId)


		}catch(err){
			console.log('\n','----------->err: ', (err))
			throw {
				message: 'Ops! ocorreu um erro ao listar suas contas!',
				identifier: err.identifier || 'error listing bills',
				status: status['INVALID-DATA']
			}
		}
	}

}

module.exports = House