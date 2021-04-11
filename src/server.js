const path = require('path')
const express = require('express')
const routes = require('./routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3333, () => console.log('Server started at http://localhost:3333'))
