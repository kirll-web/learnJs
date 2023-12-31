const btn = document.querySelector('button');


function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
  //*открываем запрос, принимаем несколько параметров,стандартно принимает всего 2 параметра - метод запроса и url запроса. GET - получить данные, POST - отправка данных на сервер(запись в бд), put - обновление данных, delete - удаление данных. 

  xhr.addEventListener('load', () => {
    console.log('request loaded');
    console.log(xhr.responseText);//*хранит в себе ответ от сервера
    cb(JSON.parse(xhr.responseText));//*вызываем callback, чтобы получить ответ вне неашей функции
  });//*load - событие, когда мы успешного получили даныные

  xhr.addEventListener('error', () => {
    console.log('error');
    console.log(xhr.responseText);//*хранит в себе ответ от сервера
  });

  //*load - событие, когда мы успешного получили даныные

  xhr.send();//*отправка данных

  //& запросы ассинхронные, мы не можем предугадать, когда нам придут данные и сработают события
  //&если связь с сервером прошла успешно, но путь до файла неправильный, то сработает событие load, а не error.
}

btn.addEventListener('click', (e) => {
  getPosts(response => {
    console.log(response);
  })  
});
