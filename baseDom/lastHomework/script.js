const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

//? Условия:
//?  1. В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.

//?  2. Количество пользователей может быть любым.

//?  3. Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер.

//?  4. В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

const container = document.querySelector('.container');
container.insertAdjacentHTML('afterbegin',
`<table class="table">
<thead>
</thead>
<tbody>
</tbody>
</table>`);

Object.values(users).forEach((user, index) => user.index = index + 1);

const tbody = document.querySelector('tbody'),
      keysTh = {
        index: '#',
        name: 'Name',
        email: 'Email',
        balance: 'Balance'
      },
      thead = document.querySelector('thead').appendChild(createTr(keysTh, keysTh));


function renderAllUsers([...objUsers], keys) {
  let totalBalance = 0;

  const fragment = document.createDocumentFragment();
  objUsers.forEach((user, i) => {
    fragment.appendChild(createTr(user, keys));
    totalBalance += user.balance;
  });
  fragment.appendChild(createTotalBalance(totalBalance));
  
  tbody.appendChild(fragment);
}

function createTr(user, keys) {
  const tr = document.createElement('tr');
  let arrKeys =  Object.keys(keys);

  arrKeys.forEach(key => {
    tr.appendChild(createTh(user[key]));
  })
  
  return tr;
}

function createTh(info) {
  const th = document.createElement('th');
  th.textContent = info;
  return th;
}

function createTotalBalance(totalBalance) {
  const tr = document.createElement('tr'),
        emptyCols = 3;

  let th = createTh('');
  th.setAttribute('colspan', emptyCols);
  tr.appendChild(th);

  th = createTh(`Total balance: ${totalBalance}`);
  tr.appendChild(th);

  return tr;
}

renderAllUsers(users, keysTh);