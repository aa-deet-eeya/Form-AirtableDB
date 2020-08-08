const express = require('express')
const router = express.Router()

const controller = require('./Controller/airtableController')

router.post('/', controller.createRecord)

module.exports = router