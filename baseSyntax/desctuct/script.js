//!деструктуризация для работы со сложными структурами, для их упрощения. Деструктурировать можно объекты, массивы, свойства функций, если они представлены в виде объектов или функций

const user = {
  firstname: 'firstname',
  lastname: 'lastname',
  age : 25,
  info: {
    work: 'ya',
    skills: ['html', 'css']
  }
};

const {firstname: name, lastname,  age = 30} = user; //*деструктуризация
//* если в объекте свойство было объявлено, то в переменную запишется оно. = 30 - дефолтное значение на случай, если его нет в объекте
//* name - переименование свойства объекта. Значение будет доступно именно поэтому имени переменной.
console.log(name, lastname, age);

const {
  info: {work}
} = user;
console.log(work);

// ? деструктуризация массивов
// const colors = ['white', 'black', 'red'];
// const [w, b, red] = colors;
const [w, , red] = colors;//* пропуск элемента, вывод: white, red
// console.log(w, red);
const nArr = ['hello', ['key', 'value']];
const [, [key, value]] = nArr
console.log(key, value);
const names = ['kirill', 'Masha'];
//? операторы rest и spread
//*rest - позволяет получить остаток для массива или используется для копирования массивов (неглубокое копирование) + слияние массивов (также работает с объектами)
const colors = ['white', 'black', 'red'];
const [color1, ...otherColors] = colors;
console.log(color1, otherColors); //* otherColors - массив из оставшихся элементов
const colorNames = [...colors, ...names];
console.log(colorNames);


// ? 1) Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
//?func('a', 'b', 'c', 'd') → { first: 'a', other: ['b', 'c', 'd'] }
function func() {
  const [first, ...other] = arguments;
  return {
    first: first,
    other: other
  }
}

console.log(func('1', '2', '3'));

// ?Организовать функцию getInfo, которая принимает объект вида { name: ..., info: { employees: [...], partners: [ … ] } } и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
  name: 'Google',
  info: { 
    employees: ['Vlad', 'Olga'], 
    partners: ['Microsoft', 'Facebook', 'Xing'] 
  }
};


function getInfo(obj) {
  const {
    name = 'Unknown', 
    info: {
        partners: [partner1, partner2]
      }
  } = obj;
  console.log(`Name: ${name}\nPartners: ${partner1}, ${partner2}`);
}
getInfo(organisation);


// ? Используя деструктуризацию получить значения из следующих полей
// ? 1. name,  balance, email
// ? 2. из массива tags получить первый и последний элемент
// ? 3. из массива friends получить значение поле name из первого элемента массива
// ? Если какое то из полей не имеет значения то подставить значение по умолчанию.

let user = {
  "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
  "isActive": false,
  "balance": "$2,474.46",
  "age": 30,
  "eyeColor": "blue",
  "name": "Tameka Maxwell",
  "gender": "female",
  "company": "ENOMEN",
  "email": "tamekamaxwell@enomen.com",
  "phone": "+1 (902) 557-3898",
  "tags": [
    "aliquip",
    "anim",
    "exercitation",
    "non",
  ],
  "friends": [
    {
      "id": 0,
      "name": "Barber Hicks"
    },
    {
      "id": 1,
      "name": "Santana Cruz"
    },
    {
      "id": 2,
      "name": "Leola Cabrera"
    }
  ],
};




const {name = 'undefined', balance = 'undefined', email = 'undefined'} = user;
const [firstTags = 'undefined', , , lastTags = 'undefined'] = user.tags;
const {name2 = 'undefined'} = user.friends[0];

//!Правильное решение
const {
  name = '',
  email = '',
  balance = '',
  tags: [firstTag = '', , , lastTag = ''] = [],
  friends: [{ name: friendName = '' }] = []
} = user;


// console.log(name);

const [...tags] = user.tags;
const [...friends] = user.friends;
//!Правильное решение
const newArr = [...user.tags, ...user.friends];
console.log(friends);
