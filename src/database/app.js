const mongoose = require('mongoose')

mongoose.connect('moogoosedb://localhost/apirest', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose