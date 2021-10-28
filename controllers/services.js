//Recevies the app from index
const Services = require('../models/services')//Require the Sevices class from the models
module.exports = app => {
    app.get('/services', (req, res) => {
        Services.toList(res)
    })
    app.get('/services/:id', (req, res) => {//gets the id throught the passed id
        const id = parseInt(req.params.id)
        Services.lookforId(id, res)
    })
    //Now is necessary to change the database, PUT or Pacth? Put <- change all elements X , Patch <- change just one field V
    app.patch('/services/:id',  (req, res) => {
        //gets the id throught the passed id
        const id = parseInt(req.params.id)
        const values = req.body// in this case the values to be changed will be send trought body
        Services.changeDatabase (id, values ,res)
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