module.exports = app => {
    app.get('/services', (req, res) => {
        res.send('You are on services route! 😊')
    //Now instead of send data this function will ask for data
    app.post('/services', (req, res) => {
        res.send('You are on services and it doing a POST! 📬🏠')
    })
    })    
}