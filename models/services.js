
//In this models will send to data to databse
const connection = require('../infrastructure/connection')
//Requires MySQL config

class Services{
    add(service, res){
        const date = moment().format('YYYY-MM-DD hh:mm:ss'); //used to format the moment that the user create the data | On MYSQL date format
        dateCreation = moment(service.dateCreation, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss')//THE second param in moment is just for dev porpouses.
        //instead of change this object it will be created a new object:

        isValidDate = moment(data).isSameOrAfter(dateCreation)
        isValidClient = service.client.lenght >= 4

        const validation = [
            {
                name: 'date',
                valid: isValidDate,
                msg: 'date must be equal or greater than actual date'
            },
            {
                name: 'client name',
                valid: isValidClient,
                msg: "client's name must have at least 4 letters"

            }

        ]

        
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