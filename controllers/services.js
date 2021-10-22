//Recevies the app from index
const Services = require('../models/services')//Require the Sevices class from the models
module.exports = app => {
    app.get('/services', (req, res) => {
        Services.toList(res)
    })
    app.get('/services:id', (req, res) => {
        const id = parseInt(req.params)
        Services.lookforId(id, res)
    })
    //Now instead of send data this function will ask for data
    app.post('/services', (req, res) => {
        //before send a res to client it is necessary to see what is happening with the req
        const service = req.body
        Services.add(service, res)
        /*If just console.log(req.body), it will be returned undefined. It must be treated, so body-parser is necessary*/

    //For for test this, visually it gonna be used POSTMAN
    })    
}