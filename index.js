/*Each file has its specific reason:
    index: to server
    CustomExpress: configurate the express, each modification in express will be presented in this file
    services: manage the app's routes, what to do when its "get"
    */
   
const customExpress = require('./config/customExpress.js')

const connection = require('./infrastructure/connection')//requires the connection with mysql

const Tables = require('./infrastructure/Tables')

connection.connect(error => {
    if(error){
        console.log(error)
    }
    else{
        console.log('connection done!')

        Tables.init(connection)//The tables class uses the connection required from the connection.js

        const app = customExpress()

        app.listen(3000, () => {
            console.log("Working the server in the 3000 gate")})

    }
})


app.get('/', (req, res) => {
    res.send('Runing the server, allright!  👍')
})

//It means that when there is no rout it is gonna return the function
//req == request; res == response
