const express = require('express')
const app = express()
const cors = require('cors');


const pages = require('./routes/pages')

app.use(cors({ origin: 'http://localhost:3000/' }))
 // static assets
 app.use(express.static('./methods-public'))
 // parse form data\
 app.use(express.urlencoded({ extended: false}))
 // parse json
 app.use(express.json())

 app.use('/',pages)

app.listen(8080,()=>{
    console.log('Server is now listening on port 8080')
})