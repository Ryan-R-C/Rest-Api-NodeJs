

//In this models will send to data to databse
const connection = require('../infrastructure/connection')
//Requires MySQL config

class Services{
    add(service, res){
        //All these dates are in American pattern
        const date = moment().format('YYYY-MM-DD hh:mm:ss a'); //used to format the moment that the user create the data | On MYSQL date format
        dateCreation = moment(service.dateCreation, 'DD/MM/YYYY').format('MMMM Do YYYY, h:mm:ss a')//THE second param in moment is just for dev porpouses.
        //instead of change this object it will be created a new object:
        const ServiceDated = {...service, date,dateCreation}
        

        const sql = `INSERT INTO Services SET ?`
        //In query: sql config, the object that is beeing saved, error and results
        connection.query(sql, ServiceDated, (error, results) =>{
            if(error){
                res.status(400).json(error)
            }
            else{ 
                res.status(201).json(results)
            }
        })

    }
}
module.exports = new Services