//In this models will send to data to databse
const connection = require('../infrastructure/connection')
//Requires MySQL config

class Services{
    add(service){
        const sql = `INSERT INTO Services SET ?`
        //In query: sql config, the object that is beeing saved, error and results
        connection.query(sql, service, (error, results) =>{
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