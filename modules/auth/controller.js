"use strict"

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const model = require('./model')

const register = async (_, {username, password}) => {
  const check = await model.checkUsername(username)
  if(check == undefined) {
    return {
      error: `Opss.. something's wrong with your database`
    }
  } else {
    if(typeof check === 'object') {
      if(check.length == 0) {
        const salt = await bcrypt.genSalt(10)
        const password_hashing = await bcrypt.hash(password, salt)
        const result = await model.register(username, password_hashing)
        return {
          id: result[0]
        }
      } else {
        return {
          error: `Register unsuccessfully, because your username is already exist`
        }
      }
    } else {
      return {
        error: check
      }
    }
  }
}

const login = async (_, {username, password}) => {
  const check = await model.checkUsername(username)
  if(check == undefined) {
    return {
      error: `Opss.. something's wrong with your database`
    }
  } else {
    if(typeof check === 'object') {
      if(check.length > 0) {
        const checkPassword = await bcrypt.compare(password, check[0].password)
        if(checkPassword) {
          const token = jwt.sign({username: username}, process.env.KEY)
          const res = {
            username: check[0].username,
            password: check[0].password,
            token: token
          }
          return {
            result: res
          }
        } else {
          return {
            error: `Login unsuccessfully, because your password is wrong`
          }
        }
      } else {
        return {
          error: `Login unsuccessfully, because your email is not registered`
        }
      }
    } else {
      return {
        error: check
      }
    }
  }
}

module.exports = {
  register,
  login
}