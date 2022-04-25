"use strict"

const db = require('@configs/connection')
const table = 'pegawai'

const getAll = async () => {
  try {
    const data = await db.select().table(table)
    return data
  } catch(e) {
    return e.sqlMessage
  }
}
const getDetail = async (id) => {
  try {
    const data = await db(table).where('id', id)
    return data
  } catch(e) {
    return e.sqlMessage
  }
}

const store = async (nama, alamat, telepon) => {
  try {
    const store = await db(table).insert({nama: nama, alamat: alamat, telepon: telepon})
    return store
  } catch(e) {
    return e.sqlMessage
  }
}

const update = async (id, nama, alamat, telepon) => {
  try {
    const update = await db(table).where('id', id).update({nama: nama, alamat: alamat, telepon: telepon})
    return update
  } catch(e) {
    return e.sqlMessage
  }
}

const remove = async (id) => {
  try {
    const remove = await db(table).where('id', id).del()
    return remove
  } catch(e) {
    return e.sqlMessage
  }
}

module.exports = {
  getAll,
  getDetail,
  store,
  update,
  remove
}