"use strict"

const { GraphQLString, GraphQLID } = require('graphql')
const type = require('./type')
const controller = require('./controller')

const mutations = {
  register: {
    type,
    args: {
      id: {
        type: GraphQLID
      },
      username: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      error: {
        type: GraphQLString
      }
    },
    resolve: controller.register.bind(controller)
  }
}

module.exports = mutations