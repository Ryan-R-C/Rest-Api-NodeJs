const moment = require('moment')

//In this models will send to data to databse
const connection = require('../infrastructure/connection')
//Requires MySQL config

class Services{
    add(service, res){
        const dateCreation = moment().format('YYYY-MM-DD hh:mm:ss'); //used to format the moment that the user create the data | On MYSQL date format
        const date = moment(service.date,  'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss')//THE second param in moment is just for dev porpouses.
        //instead of change this object it will be created a new object:

         const isValidDate = moment(date).isSameOrAfter(dateCreation)
         const isValidClient = service.client.lenght >= 4

         const validations = [
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

        const errors = validations.filter(
            element => !element.valid
         )
        const isThereErrors = errors.length  
        if(isThereErrors){
            res.status(400).json
            
        }
        else{// it will try to creat it just if the validation is ok
            res.status(200).json(results)
            const ServiceDated = {...service, date,dateCreation} 
        
            const sql = `INSERT INTO Services SET ?`
            //In query: sql config, the object that is  beeing saved, error and results
            connection.query(sql, ServiceDated, (error,     results) =>{
                if(error){
                    res.status(400).json(error)
                }
                else{ 
                    res.status(201).json(service)
                }
            })

            }
        
    }
    toList(res){
        const sql = 'SELECT * FROM Services'
        connection.query(sql, (error, results) =>{
            if(error){
                res.status(400).json(error)
            }
            else{
                res.status(200).json(results)
            }
        } )
    }
    lookforId(id, res){
        const sql = `SELECT * FROM Services WHERE id=${id}`
        connection.query(sql, (error, results) =>{
            if(error){
                res.status(400).json(error)
            }
            else{
                res.status(200).json({id})
            }
        } )
    }
    changeDatabase(id, values, res){
        if(values.date){
            values.date = moment(values.date,  'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss')//THE second param in moment is just for dev porpouses.
        }
        console.log(values)
        const sql = `UPDATE Services SET ? WHERE id=${id}`
        connection.query(sql, [values, id], (error, results) =>{
            if(error){
                res.status(400).json(error)
            }
            else{ 
                res.status(201).json(...values, id)
            }
        })

    }
    deleteRow(id, res){
        const sql = `DELETE FROM SERVICES WHERE id=?`;
        connection.query(sql, id, (error, results) => {
            if(error){
                res.status(400).json(error)
            }
            else{ 
                res.status(200).json(results)
            }
        })
    }
}
module.exports = new Services