const express = require('express')

const port = 1234
const elements = require('./elements.json')

var app = express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index', { elements })
})

app.listen(port, () => {
    console.log(`Server running on ${port}...`)
})
