const link = 'https://jsonplaceholder.typicode.com/users';
const container = document.querySelector('.container');


function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', link);

  xhr.addEventListener('load', () => {
    console.log('request loaded');
    // console.log(xhr.responseText);
    cb(createList(JSON.parse(xhr.responseText)));
  });

  xhr.addEventListener('error', () => {
    console.error('error');
    console.error(xhr.responseText);//*хранит в себе ответ от сервера
  });

  xhr.send();
}

function createCard(user) {
  const card = document.createElement('div'),
        cardBody = document.createElement('div'),
        name = document.createElement('h5'),
        cardText = document.createElement('div');

  card.classList.add('card');
  cardBody.classList.add('card-body');
  name.classList.add('card-title');
  cardText.classList.add('card-text');

  card.append(cardBody);
  cardBody.append(name);
  cardBody.append(cardText);

  name.textContent = user.name;
  name.addEventListener('click', (e) => {
    Object.entries(user).forEach(([key, value]) => {
      if(key != 'name') {
        const p = document.createElement('p');
        if(value instanceof Object) {
          p.textContent = key;
          console.log('1', p);
          Object.entries(value).forEach(([key, value]) => {
            const  pInfo = document.createElement('p');
            pInfo.textContent = `${key}: ${value}`;
            cardText.append(pInfo);
          });
        } else {
          p.textContent = `${key}: ${value}`;
          cardText.append(p);
        }
      }
    });
  });
  return card;
}


function createList(content) {
  const list = document.createDocumentFragment();
  content.forEach(user => list.append(createCard(user)));
  return list;
}

function appendUsersToPage(list) {
  container.append(list);
}

getUsers(appendUsersToPage);