const btn = document.querySelector('button');
const btnAddPost = document.querySelector('.addPost');

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
  //*открываем запрос, принимаем несколько параметров,стандартно принимает всего 2 параметра - метод запроса и url запроса. GET - получить данные, POST - отправка данных на сервер(запись в бд), put - обновление данных, delete - удаление данных. 

  xhr.addEventListener('load', () => {
    console.log('request loaded');
    console.log(xhr.responseText); //*хранит в себе ответ от сервера
    cb(JSON.parse(xhr.responseText)); //*вызываем callback, чтобы получить ответ вне неашей функции
  }); //*load - событие, когда мы успешного получили даныные

  xhr.addEventListener('error', () => {
    console.log('error');
    console.log(xhr.responseText); //*хранит в себе ответ от сервера
  });

  //*load - событие, когда мы успешного получили даныные

  xhr.send(); //*отправка данных

  //& запросы ассинхронные, мы не можем предугадать, когда нам придут данные и сработают события
  //&если связь с сервером прошла успешно, но путь до файла неправильный, то сработает событие load, а не error.
}

btn.addEventListener('click', (e) => {
  // myHttpRequest({
  //   method: 'GET',
  //   url: 'https://jsonplaceholder.typicode.com/posts'
  // }, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  //   console.log(res);
  // });

  const myHttp = http();

  myHttp.get('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(res);
  }
);

  
});


function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://jsonplaceholder.typicode.com/posts');
  //*открываем запрос, принимаем несколько параметров,стандартно принимает всего 2 параметра - метод запроса и url запроса. GET - получить данные, POST - отправка данных на сервер(запись в бд), put - обновление данных, delete - удаление данных. 

  xhr.addEventListener('load', () => {
    console.log('request loaded');
    const response = JSON.parse(xhr.responseText);
    cb(response);
  }); //*load - событие, когда мы успешного получили даныные

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.addEventListener('error', () => {
    console.log('error');
    console.log(xhr.responseText); //*хранит в себе ответ от сервера
  });

  //*load - событие, когда мы успешного получили даныные

  xhr.send(JSON.stringify(body)); //*отправка данных
}

btnAddPost.addEventListener('click', e => {
  const myHttp = http();

  myHttp.post('https://jsonplaceholder.typicode.com/posts', body = {
    title: 'foo',
    body: 'bar',
    userId: 1
  }, 
  {
    'Content-type': 'application/json; charset=UTF-8'
  }, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(res);
  }
  );
})

function myHttpRequest({
  method,
  url
} = {}, cb) {
  try {
    const xhr = new XMLHttpRequest;

    xhr.open(method, url);

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

  //* try  нужен для обработки синхронных ошибок
}

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


