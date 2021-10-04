module.exports = app => {
    app.get('/services', (req, res) => {
        res.send('You are on services route! 😊')
    //Now instead of send data this function will ask for data
    app.post('/services', (req, res) => {
        /*If just console.log(req.body), it will be returned undefined. It must be treated, so body-parser is necessary*/
        res.send('You are on services and it doing a POST! 📬🏠')
    //For for test this, visually it gonna be used POSTMAN
    })
    })    
}