const apiURL = 'https://jsonplaceholder.typicode.com/users';
const container = document.querySelector('.container');
const usersListEl = document.querySelector('.users-list');
const usersInfoEl = document.querySelector('.users-info');
//! 1. реализовать запрос получения пользователей
//! 2. реализовать обработчик ответа от сервера
//! 3. рендер списка пользователей
//! 4. повесить событие клика на список
//! 5. навесить маркеры на каждую кнопку внутри списка
//! 6. делаем запрос, получаем инфу о выбранном пользователе
//! 7. обработка ответа от сервера
//! 8. рендереим инфу о пользователе

usersListEl.addEventListener('click', e => {
  if (e.target.dataset.userId) {
    getUserInfoHTTP(e.target.dataset.userId, onGetUserInfoCallback)
  }
})

function getUsersHTTP(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', apiURL);

  xhr.addEventListener('load', e => {
    if(xhr.status != 200) {
      console.error(JSON.parse(xhr.responseText));
      return;
    }
    const res = JSON.parse(xhr.responseText);

    cb(res);
  });

  xhr.addEventListener('error', e => {
    console.error(JSON.parse(xhr.responseText))
  });

  xhr.send();
}

function onGetUserCallback(users) {
  if(!users.length) {
    return
  }
  renderUsersList(users);
}

function getUserInfoHTTP(id, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${apiURL}/${id}`);

  xhr.addEventListener('load', e => {
    if(xhr.status != 200) {
      console.error(JSON.parse(xhr.responseText));
      return;
    }
    const res = JSON.parse(xhr.responseText);

    cb(res);
  });

  xhr.addEventListener('error', e => {
    console.error(JSON.parse(xhr.responseText))
  });

  xhr.send();
}

function onGetUserInfoCallback(user) {
  if(!user.id) {
    console.log('not found user');
    return;
  }


  renderUsersInfo(user);
}

function renderUsersInfo(user) {
  usersInfoEl.innerHTML = '';

  const template = userInfoTemplate(user);

  usersInfoEl.insertAdjacentHTML('afterbegin', template);
}


function userInfoTemplate(user) {
  return `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${user.name}</div>
    <div class="card-body">
      <h5 class="card-title">${user.email}</h5>
      <ul classs="list-group list-group-flush">
        <li class="list-group-item"><b>nickname</b>${user.username}</li>
        <li class="list-group-item"><b>website</b>${user.website}</li>
        <li class="list-group-item"><b>company</b>${user.company.name}</li>
        <li class="list-group-item"><b>city</b>${user.address.city}</li>
        <li class="list-group-item"><b>phone</b>${user.phone}</li>
      </ul>
    </div>
  </div>`;
}


function renderUsersList(users) {
  const fr = users.reduce((acc, user) =>  acc + userListItemTemplate(user), '');

  usersListEl.insertAdjacentHTML('afterbegin', fr);
}

function userListItemTemplate(user) {
  return `<button type="button" data-user-id=${user.id} class="list-group-item list-group-item-action" aria-current="true">
    ${user.name}
  </button>`;
}

getUsersHTTP(onGetUserCallback);



