const NoticesBs = require('../business/notices.bs')
const errorHandler = require('../utils/error-handler')
const status = require('../utils/status')

class Notices {

  async create(req, res) {
    try {
      let notice = new NoticesBs(req, res)
      let response = await notice.create()

      res.status(status['SUCCESS']).send()

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async list(req, res) {
    try {
      let notice = new NoticesBs(req, res)
      let response = await notice.list()

      res.status(status['SUCCESS']).json(response)

    }catch(err) {
      errorHandler(err, res)
    }
  }

  async delete(req, res) {
    try {
      let notice = new NoticesBs(req, res)
      let response = await notice.delete()

      res.status(status['SUCCESS']).send()

    }catch(err) {
      errorHandler(err, res)
    }
  }

}

module.exports = Notices