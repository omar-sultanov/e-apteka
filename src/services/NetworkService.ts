import { Product } from "../models/Product";
import React from 'react'
import CardStore from "../stores/CardStore";
const NetworkService= () => {
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo"
const url= "http://77.223.99.133:8080/api/products/part"

const req= {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'token': token
  },
  body: JSON.stringify( {offset:0, limit:10})
}
  return (
    fetch(url,req)
    .then(response => response.json())
  )
}

export default NetworkService

// interface body {
//   offset: number;
//   limit: number;
// }
// export default class NetworkService {
//   token: string;
//   body: body;
//   constructor(token: string) {
//     this.token = token;
//     this.body.limit = 10;
//     this.body.offset = 0;
//   }

//   fetch(url: string) {
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         token: this.token,
//       },
//       body: JSON.stringify(this.body),
//     };
//     return fetch(url, options).then((response) => response.json());
//   }
// }


// import { Product } from "../models/Product";
// import React from 'react'
// import CardStore from "../stores/CardStore";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluIiwiaWQiOjgsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNzI5MjAyOX0.smA9a5v47rs-oG2loD1jR5Zd5RlGqmb0XN0KWjniyKo"


// export default class NetworkService {
// fetch(url:string){
// const req= {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     'token': token
//   },
//   body: JSON.stringify( {offset:0, limit:10})
// }
//  return (
//     fetch(url,req)
//     .then(response => response.json())
//     //     .then(response => {
//     //     console.log(response.data.products)
//     // })       
//     .catch((error) => {
//         console.log("logging the error in catch", error);
//     })

//     )
// }}