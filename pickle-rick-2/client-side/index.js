const express = require('express')
const nunjucks = require('nunjucks')
const data = require("./static/rick-and-morty.json")
const app = express()
const port = 3000

// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

// Static Files
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/characters', function(req, res) {
    res.render('allcharacter.njk',{title: "Rick and Morty", characters: data.results});
});

// Endpoint for /characters/:id shows details for ONE characer
app.get('/character/:id', function(req, res) {
    let id = req.params.id - 1
    res.render('character.njk', {title: data.results[id].name, character: data.results[id]} );
});