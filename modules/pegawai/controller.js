"use strict"

const model = require('./model')

const getAll = async(_, {}) => {
  return await model.getAll()
}

const getDetail = async (_, {id}) => {
  const result = await model.getDetail(id)
  return result[0]
}

const store = async (_, {nama, alamat, telepon}) => {
  const result = await model.store(nama, alamat, telepon)
  return {
    id: result[0]
  }
}

const update = async (_, {id, nama, alamat, telepon}) => {
  const result = await model.update(id, nama, alamat, telepon)
  if(result) {
    return {
      message: `Update data pegawai successfully!`,
      id: id
    }
  } else {
    return {
      message: `Update data pegawai unsuccessfully!`,
      id: id
    }
  }
}

const remove = async (_, {id}) => {
  const result = await model.remove(id)
  if(result) {
    return {
      message: `Delete data pegawai successfully!`,
      id: id
    }
  } else {
    return {
      message: `Delete data pegawai unsuccessfully!`,
      id: id
    }
  }
}

module.exports = {
  getAll,
  getDetail,
  store,
  update,
  remove
}