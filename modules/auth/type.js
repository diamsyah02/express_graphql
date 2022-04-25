"use strict"

const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql')

const resultType = new GraphQLObjectType({
  name: 'Result',
  fields: () => ({
    username: {
      type: GraphQLString
    },
    token: {
      type: GraphQLString
    }
  })
})

const type = new GraphQLObjectType({
  name: 'Auth',
  description: 'A Authentication',
  fields: {
    id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    token: {
      type: GraphQLString
    },
    result: {
      type: resultType
    },
    error: {
      type: GraphQLString
    }
  }
})

module.exports = type