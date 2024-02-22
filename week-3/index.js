const express = require('express')
const app = express()
const port = 3000

app.use(express.static('static'))

//acepts get requests to
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
}) 

app.get('/roster', (req,res) => {
    let roster = [
        {name: 'Tom Brady', position: 'QB'},
        {name: 'Rob Gronkowski', positin: 'TE'},
        {name: 'Julian Edelmen', position: "WR"},
    ]
    res.send(roster)
})

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + "static/img/blah.png")
// }) 

//accepts post requests to
//variables font shw in adddress bar
// app.post('/', (req,res) => {
//     res.send('Hello World')n
// }) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})