"use strict"

const { GraphQLObjectType } = require('graphql')
const authQuery = require('../modules/auth/queries')
const pegawaiQuery = require('../modules/pegawai/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      /** auth */
      login: authQuery.login,
      /** pegawai */
      getAllPegawai: pegawaiQuery.getAll,
      getDetailPegawai: pegawaiQuery.getDetail,
      removePegawai: pegawaiQuery.remove
    }
})