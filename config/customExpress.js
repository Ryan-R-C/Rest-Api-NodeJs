const  express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')//treat the content that will be send for the API

module.exports = () => {

    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))//It could read many types of data as .json()
    app.use(bodyParser.json())//
    consign()
        .include('controllers') //import all controllers which is in cotrollers folder
        .into(app) //imports to app
    
    return app
}

