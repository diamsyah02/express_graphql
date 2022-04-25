"use strict"

const { GraphQLString } = require('graphql')
const type = require('./type')
const controller = require('./controller')

const queries = {
  login: {
    type,
    args: {
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
        type: GraphQLString
      },
      error: {
        type: GraphQLString
      }
    },
    resolve: controller.login.bind(controller)
  }
}

module.exports = queries