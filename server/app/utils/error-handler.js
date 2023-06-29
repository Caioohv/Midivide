module.exports = (err, res) => {
  let errorObj = {
    message: err.message,
    identifier: err.identifier,
  }

  res.status(err.status).json(errorObj)
}