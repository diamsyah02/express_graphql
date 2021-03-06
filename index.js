"use strict"

require('module-alias/register')
require('./pathAlias')
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.listen(process.env.PORT, console.log(`Server ready on http://localhost:${process.env.PORT}`))
app.use('/graphql', routes)