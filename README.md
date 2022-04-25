# express_graphql
 GraphQL with Express JS and Clean Architecture
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
