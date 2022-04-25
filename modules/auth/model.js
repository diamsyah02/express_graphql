"use strict"

const db = require('@configs/connection')
const table = 'users'

const register = async (username, password) => {
  try {
    return await db(table).insert({username: username, password: password})
  } catch(e) {
    return e.sqlMessage
  }
}

const checkUsername = async (username) => {
  try {
    return await db(table).where('username', username)
  } catch(e) {
    return e.sqlMessage
  }
}

module.exports = {
  register,
  checkUsername
}