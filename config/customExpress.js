const  express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')//treat the content that will be send for the API
const moment= require('moment')



module.exports = () => {

    const app = express()

    app.use(bodyParser.json())//all body(data types)  
    app.use(bodyParser.urlencoded({extended: true}))//It could read many types of data as .json()

    consign()
        .include('controllers') //import all controllers which is in cotrollers folder
        .into(app) //imports to app
    
    return app
}

