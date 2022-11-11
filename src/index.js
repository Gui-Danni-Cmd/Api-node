const express = require('express')
const body_parse = require('body-parser')

const app = express()

app.use(body_parse.json())
app.use(body_parse.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Conectado')
})

app.listen(3000)