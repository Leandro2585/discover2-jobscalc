const express = require('express')
const routes = require('./routes')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(routes)

app.listen(3333, () => console.log('Server started at http://localhost:3333'))
