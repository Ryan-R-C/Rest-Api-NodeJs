/*|============================================================|
  |                                                            |
  |Reponsible to require and give it the configuration database|
  |                                                            |  
  |============================================================|
                                           */

const mysql = require('mysql')
const connection = mysql.createConnection({
    //Into this method is necessary to enter a object with the config
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'ryannoderest'

})

module.exports = connection