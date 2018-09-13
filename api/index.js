require('./services/DB')
const express = require('express')
const middleware = require('./middleware')

const app = express()

middleware(app)

app.get('/', (req, res) => res.send('<h1>Hit the API!</h1>'))

module.exports = app
