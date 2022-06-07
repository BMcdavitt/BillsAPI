const express = require('express')
const app = express()

const pages = require('./routes/pages')

 // static assets
 app.use(express.static('./methods-public'))
 // parse form data\
 app.use(express.urlencoded({ extended: false}))
 // parse json
 app.use(express.json())

 app.use('/',pages)

app.listen(5000,()=>{
    console.log('Server is still listening on port 5k')
})