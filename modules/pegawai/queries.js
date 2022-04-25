"use strict"

const { GraphQLID, GraphQLString, GraphQLList } = require('graphql')
const type = require('./type')
const controller = require('./controller')

const queries = {
  getAll: {
    type: new GraphQLList(type),
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
    },
    resolve: controller.getAll.bind(controller)
  },
  getDetail: {
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
    },
    resolve: controller.getDetail.bind(controller)
  },
  remove: {
    type,
    args: {
      id: {
        type: GraphQLID
      },
      message: {
        type: GraphQLString
      }
    },
    resolve: controller.remove.bind(controller)
  }
}

module.exports = queries