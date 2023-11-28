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

async function getData() {
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


(() => {
    console.log("anonim function");
})();