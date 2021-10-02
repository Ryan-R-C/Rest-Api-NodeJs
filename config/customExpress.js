const  express = require('express')
const consign = require('consign')

module.exports = () => {

    const app = express()
    
    consign()
        .include('controllers') //import all controller which is in cotrollers folder
        .into(app) //imports to app
    
    return app
}

