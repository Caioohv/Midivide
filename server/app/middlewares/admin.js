const house = require('../repository/house.rep')
const status = require('../utils/status')

module.exports = async (req, res, next) => {
	const houseDB = new house()

	if(req.user.house) {
		let houseData = await houseDB.searchByIdentifier(req.user.house)

		if(houseData.owner_user_id === req.user.id){
			next()

		}else{
			res.status(status['ACCESS-DENIED']).json({
				identifier: 'access denied',
				message: 'Você não tem permissão para fazer isso'
			})
		}
	}else{
		res.status(status['ACCESS-DENIED']).json({
			identifier: 'access denied',
			message: 'Você não tem permissão para fazer isso'
		})
	}

}