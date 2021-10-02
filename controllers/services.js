module.exports = app => {
    app.get('/services', (req, res) => {
        res.send('You are on services route! 😊')
    })    
}