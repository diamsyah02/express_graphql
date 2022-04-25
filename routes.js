"use strict"

const { graphqlHTTP } = require('express-graphql')
const router = require('express').Router()
const schema = require('./schemas')

router.get('/', graphqlHTTP({
    schema,
    graphiql: true
}))

router.post('/', graphqlHTTP({
    schema,
    graphiql: true
}))

module.exports = router