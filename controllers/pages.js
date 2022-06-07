let {pageData} = require('../data')

const getPages = (req,res)=>{
    res.status(200).json({success:true, data:pageData})

}

module.exports = {getPages}