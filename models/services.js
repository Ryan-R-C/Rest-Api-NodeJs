//In this models will send to data to databse
const connection = require('../infrastructure/connection')
//Requires MySQL config

class Services{
    add(service){
        //All these dates are in American pattern
        const date = moment().format('MMMM Do YYYY, h:mm:ss a'); //used to format the moment that the user create the data
        dateCreation = moment(service.dateCreation).format('MMMM Do YYYY, h:mm:ss a');
        //instead of change this object it will be created a new object:
        const ServiceDated = {...service, date,dateCreation}
        

        const sql = `INSERT INTO Services SET ?`
        //In query: sql config, the object that is beeing saved, error and results
        connection.query(sql, ServiceDated, (error, results) =>{
            if(error){
                console.log(error)
            }
            else{ 
                console.log(results)
            }
        })

    }
}
module.exports = new Services