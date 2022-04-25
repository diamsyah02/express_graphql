"use strict"

const { GraphQLString, GraphQLID } = require('graphql')
const type = require('./type')
const controller = require('./controller')

const mutations = {
  store: {
    type,
    args: {
      id: {
        type: GraphQLID
      },
      nama: {
        type: GraphQLString
      },
      alamat: {
        type: GraphQLString
      },
      telepon: {
        type: GraphQLString
      },
      message: {
        type: GraphQLString
      }
    },
    resolve: controller.store.bind(controller)
  },
  update: {
    type,
    args: {
      id: {
        type: GraphQLID
      },
      nama: {
        type: GraphQLString
      },
      alamat: {
        type: GraphQLString
      },
      telepon: {
        type: GraphQLString
      },
      message: {
        type: GraphQLString
      }
    },
    resolve: controller.update.bind(controller)
  },
}

module.exports = mutations