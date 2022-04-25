"use strict"

const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql')

const type = new GraphQLObjectType({
  name: 'Pegawai',
  description: 'A Pegawai',
  fields: {
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
  }
})

module.exports = type