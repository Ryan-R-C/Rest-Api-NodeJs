const  express = require('express')
const app = express()

app.listen(3000, () => {
    console.log("Working the server in the 3000 gate")})

app.get('/', (req, res) => {
    res.send('Runing the server, allright!  👍')
})
app.get('/services', (req, res) => {
    res.send('You are on services route! 😊')
})
//It means that when there is no rout it is gonna return the function
//req == request; res == response
