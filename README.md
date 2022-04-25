# express_graphql
 GraphQL with Express JS and Clean Architecture
# Package
 - express
 - graphql
 - express-graphql
 - knex
 - mysql
 - module-alias
 - jsonwebtoken
 - bcrypt
 - cors
 - body-parser
 - dotenv
# Alur Code
 1. index.js (root folder)
 2. routes.js
 3. index.js (schemas folder)
 4. queries.js (schemas folder)
 5. mutations.js (schemas folder)
 6. queries (tiap modul di folder modules)
 7. mutations (tiap modul di folder modules)
# Example Operation
 - Login
  ```
  query{
    login(username:"Diamsyah",password:"1234") {
      result {
        username
        token
      }
      error
    }
  }
  ```
 - Register
  ```
  mutation {
   register(username: "Nanda", password: "1234") {
     id
   }
  }
  ```
 - getAllPegawai
  ```
  query {
   getAllPegawai {
     id
     nama
     alamat
     telepon
   }
  }
  ```
 - getDetailPegawai
  ```
  query {
   getDetailPegawai(id: 3) {
     id
     nama
     alamat
     telepon
   }
  }
  ```
 - storePegawai
  ```
  mutation {
   storePegawai(nama: "Dida", alamat: "Kuningan", telepon: "085523695845") {
     id
   }
  }
  ```
 - updatePegawai
  ```
  mutation {
   updatePegawai(id: 4, nama: "Dida", alamat: "Purwasari", telepon: "085523695849") {
     message
     id
   }
  }
  ```
 - removePegawai
  ```
  query {
   removePegawai(id: 5) {
     message
   }
  }
  ```
