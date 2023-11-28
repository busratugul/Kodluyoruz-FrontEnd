setTimeout(() => {
  console.log('merhaba')
}, 2000)

/* setInterval(() => {
    console.log("ben her sn çalışacağım");
},1000) */

const sayHi = (cb) => {
  cb()
}

sayHi(() => {
  console.log('hello ben callback')
})

/* fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => data.json())
  .then((users) => {
    console.log('users yüklendi', users)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((post) => console.log('postlar yüklendi', post))
  })
 */
import fetch from 'node-fetch'

/* async function getData() {
    const users = await(
        await fetch('https://jsonplaceholder.typicode.com/users')).json()
    
    const post1 = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/1')).json()

    const post2 = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/2')).json()

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
}
 */

;(() => {
  console.log('anonim function')
})()

import axios from 'axios'
import { resolve } from 'path'
import { rejects } from 'assert'
/* 
( async() => {
  const post3 = await axios("https://jsonplaceholder.typicode.com/posts/3")
  console.log("post3:", post3.data);

  const { data: post4 } = await axios("https://jsonplaceholder.typicode.com/posts/4")

  console.log("post4:", post4);
})() */

const getComments = (number) => {
  return new Promise((resolve, reject) => {
    //console.log("promise");
    if (number === 1) {
      resolve({ text: 'Selam' })
    }
    reject('Bir problem oluştu')
  })
}

getComments(1)
  .then((data) => console.log(data))
  .catch((e) => console.log(e))

const getData = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts/4')
    resolve(data)
  })
}

/* (async () => {
  try {
    const users = await getData()
    const post = await getComments(1)

    console.log(users)
    console.log(post)
  } catch (e) {
    console.log(e)
  }
})()
 */

Promise.all(getComments(1), getData().then(console.log).catch(console.log))