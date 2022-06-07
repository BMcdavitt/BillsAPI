const express = require('express')
const router = express.Router()

let {pageData} = require('../data')

const {
    getPages,
} = require('../controllers/pages')

router.route('/api/pages').get(getPages)

module.exports = router