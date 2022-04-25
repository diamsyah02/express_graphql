"use strict"

const { GraphQLObjectType } = require('graphql')
const authMutation = require('../modules/auth/mutations')
const pegawaiMutation = require('../modules/pegawai/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
      /** auth */
      register: authMutation.register,
      /** pegawai */
      storePegawai: pegawaiMutation.store,
      updatePegawai: pegawaiMutation.update
    }
})