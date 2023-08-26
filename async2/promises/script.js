//* проблема callback. получаем callback hell, т.к. одна функция вложена в другую и так матрешкой, из-за этого нужно проверять не произошла ли ошибка на предыдущем запросе.

// const promise = new Promise((resolve, reject) => {
//   const math = Math.random() * 10;
//   setTimeout(() => {
//     if(math > 9) {
//       resolve('success')
//     } else {
//       reject('error')
//     }
//   }, 3000)
// });//* resolve - успешно, reject -неуспешно

// promise
//   .then(x => {
//     console.log(x);
//     return x;
//   })
//   .then(y => {
//     console.log(y);
//     console.log(promise);
//     return y;
//   })
//   .catch(err => console.log(err)); //*результат then можно передавать в след then

//* Если promise уже выполнялся, он переходит в статут resolven/rejected, то он сохраняет свое состояниеи и все данные
//* если вызван resolve, то reject не может быть вызван и наоборот
//* если один из промисов выпадет в ошибку, то он выпадет в catch

// console.log(promise);

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest;

        xhr.open('GET', url);

        xhr.addEventListener('load', () => {
          //* проверяем, что наш статус имеет код 2** 
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`error. Status code: ${xhr.status}`, xhr);
            return;
          }

          console.log('request loaded');
          cb(null, JSON.parse(xhr.responseText));
        });

        xhr.addEventListener('error', () => {
          cb(`error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.addEventListener('load', () => {
          console.log('request loaded');
          const response = JSON.parse(xhr.responseText);
          cb(response);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.addEventListener('error', () => {
          console.log('error');
          console.log(xhr.responseText);
        });

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    }
  }
}

const myHttp = http();

// myHttp.get(
//   'https://jsonplaceholder.typicode.com/posts', 
//   (err, res) => {
//     if (err) {
//       console.log('error', err);
//       return;
//     }

//     myHttp.get(
//       'https://jsonplaceholder.typicode.com/comments?postId=1',
//       (err, res) => {
//         if (err) {
//           console.log('error', err);
//           return;
//         }
    
//         myHttp.get(
//           'https://jsonplaceholder.typicode.com/users/1',
//           (err, res) => {
//             if (err) {
//               console.log('error', err);
//               return;
//             }
//             console.log('finish');
//           }  
//         )
//       }  
//     )
//   }  
// )

function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`, 
      (err, res) => {
        if(err) {
          reject(err);
        } 
          
        resolve(res);
      })
  })
}

function getPostComments(post) {
  const {id} = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
       (err, res) => {
        if(err) {
          reject(err);
        } 
          
        resolve({post, comments: res});
      })
  })
}

function getUserCreatedPost(data) {
  const {post: {userId}} = data;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
       (err, res) => {
        if(err) {
          reject(err);
        } 
          
        resolve({...data, user: res});
      })
  })
}

// getPost(2)
//   .then(post => getPostComments(post))
//   .then(data => getUserCreatedPost(data))
//   .then(fullData => console.log(fullData))
//   .catch(err => console.error(err))
//   .finally(() => console.log('finally'))

function getPost2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`, 
      (err, res) => {
        if(err) {
          reject(err);
        } 
          
        resolve(res);
      })
  })
}

function getPostComments2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
       (err, res) => {
        if(err) {
          reject(err);
        } 
          
        resolve(res);
      })
  })
}

function getUserCreatedPost2(userId) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
       (err, res) => {
        if(err) {
          reject(err);
        } 
          
        resolve(res);
      })
  })
}

Promise.all([getPost2(1), getPostComments2(1), getUserCreatedPost2(1)])
  .then(fullData => console.log(fullData));// *вернет массив данныхъ в том порядке, в котором передано в массив

