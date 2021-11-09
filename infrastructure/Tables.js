/*|===================================================|
  |                                                   |
  |Reponsible create the database if it does not exits|
  |                                                   |  
  |===================================================|
                                           */
class Tables{
    init(connection){//receving the connection
        this.connection = connection
        this.createServices()
    }
    createServices(){
        const sql = 'CREATE TABLE IF NOT EXISTS Services(id int NOT NULL AUTO_INCREMENT, client varchar(30) NOT NULL, service varchar(30) NOT NULL, status varchar(20) NOT NULL, observations text, PRIMARY KEY(id))'
        this.connection.query(sql, error=>{
            if (error){
                console.log(error)
            }
            else{
                console.log('Allright! Create Table succeed')
            }
        })
    }
}

module.exports = new Tables