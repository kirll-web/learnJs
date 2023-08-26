// fetch('https://jsonplaceholder.typicode.com/posts')//*вызывая fetch, на выходе получаем promise, который выполнит ajax запрос и отработает then или catch
//       .then(response => {
//         return response.json()//*нельзя вызвать более 1 раза
//       })
//       .then(posts => console.log(data))
//       .catch(err => console.log(err))

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(post => resolve(post))
      .catch(err => reject(err))
  })
}

// getPost(3)
//   .then(post => console.log(post))
//   .catch(err => console.log(err))

function getPost2(id) {
  const [userType, userId] = id.split('-');

  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(res => res.json())
}

// getPost2('user-1')
//   .then(post => console.log(post))
//   .catch(err => console.log(err))

function getPost3(id) {
  return Promise.resolve().then(() => {//*конструкция для обработки ошибок
    const [userType, userId] = id.split('-');

    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res => res.json())
  })
}

getPost3(2)
  .then(post => console.log(post))
  .catch(err => console.log(err))