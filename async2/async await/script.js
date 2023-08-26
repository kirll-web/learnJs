// function getPost(id) {
//   return Promise.resolve().then(() => {//*конструкция для обработки ошибок
//     const [userType, userId] = id.split('-');

//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//         .then(res => res.json())
//   })
// }


//* async ставится перед объявлением функций или методов. Async превращает функцию в такую, которая всегда будет возвращать promise. 
// async function getPost(id) {
//   return 'hello';
// }

// getPost().then(msg => console.log(msg))
//*внутри такой функции можно использовать ключ.слово await, которое замораживает наш код до выполнения асинхронного действия. Можно применять к чему угодно.
async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    ).then(res => res.json);
  
    return response;
  } catch(err) {
    onsole.log(err);
    return Promise.reject(err)
  }
}



getPost(2)
  .then(data => console.log(data))
  .catch(err => console.log(err))