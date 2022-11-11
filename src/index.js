const express = require('express')
const body_parse = require('body-parse')

const app = express()

app.use(body_parse.json())
app.use(body_parse.urlencoded({ extended: false }))


app.listen(3000)