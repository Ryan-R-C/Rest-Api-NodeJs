const  express = require('express')
const consign = require('consign')

const app = express()

consign()
    .include('controllers') //import all controller which is in cotrollers folder
    .into(app) //imports to app

app.listen(3000, () => {
    console.log("Working the server in the 3000 gate")})

app.get('/', (req, res) => {
    res.send('Runing the server, allright!  👍')
})

//It means that when there is no rout it is gonna return the function
//req == request; res == response
