const apiURL = 'https://jsonplaceholder.typicode.com/users';
const form = document.forms.user;
const users = [];
const userList = document.querySelector('.users-list');
console.log(form);

//! 1. отправка нового юзера
//! 2. получение ответа от сервера
//! 3. добавление нового юзера в массив
//! 4. рендеринг всех юзеров
//! 5. рендеринг темплейта юзера
//! 


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = {};
  Object.values(form).forEach(input => {
    user[`${input['name']}`] = input.value;
  });
  
  postUser(user, addUser);
});

function postUser(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", apiURL);

  xhr.addEventListener('load', () => {
    console.log('request loaded');
    const response = JSON.parse(xhr.responseText);
    cb(response);
  }); 

  xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  xhr.addEventListener('error', () => {
    console.log('error');
    console.log(xhr.responseText); 
  });

  xhr.send(JSON.stringify(body));
}

function addUser(user) {
  users.push(user);

  updateUsersList(users);
}

function updateUsersList(users) {
  userList.innerHTML = '';
  users.forEach(user => {
    const li = userTemplate(user);
    userList.insertAdjacentHTML('afterbegin', li);
  });
}

function userTemplate(user) {
  return `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${user.name}</div>
    <div class="card-body">
      <h5 class="card-title">${user.email}</h5>
      <ul classs="list-group list-group-flush">
        <li class="list-group-item"><b>phone:</b>${user.phone}</li>
        <li class="list-group-item"><b>website:</b>${user.website}</li>
        <li class="list-group-item"><b>email:</b>${user.email}</li>
      </ul>
    </div>
  </div>`;
}