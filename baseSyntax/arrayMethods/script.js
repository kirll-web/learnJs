const numArr = [1, 5, 3 ,5, 10, 4, 323];
let str = 'avds';
let val;

val = numArr// длина массива

numArr.length = 0; //обнуление массива
numArr.length = 100; // присвоение массиву определенного количества ячеек(пустых)

val = Array.isArray(str); // проверка на то, что является ли переданный элемент массивом
val = numArr.indexOf(2); // поиск индекса переданного элем., если не находит, то возвращает -1

//push - добавление в конец, pop - удаление с конца
//unshift - добавление в начало, shift - удаление с начало

//arr.slice(0,2) - возварашает определенное кол-во элем. из массива //!не изменяет исх.массив 
//arr.splice(0,2) - удаляет определенное кол-во элем. с начального индекса(2 — кол-во удаляемых элем.)//!изменяет исх.массив
//arr.splice(0,2, 'one', 'two') - удаляет определенное кол-во элем. с начального индекса(2 — кол-во удаляемых элем.) и вставляет новые(в данном случае one и two)//!изменяет исх.массив
// numArr.join(' '); // делает из массива строку, в скобках передается разделитель, если его не передать вернет через запятую, если передать пустую строку, то вернет слитно
//arr.split()  - конвертит строку в массив, если ничего не передать, то вся строка = 1 элем.массива, если передать пустую строку, то разобьет по буквенно
// val = 'asdasd, ,sadsa ,asdasd, dsds'.split(',');
// console.log(val); 


// function changeCollection() {
//     let arr = [];
//     for(let i = 0; i < arguments.length; i++) {
//         if (Array.isArray(arguments[i])) {
//             arguments[i].shift();
//             arr[i] = arguments[i];
//         }
//     }

//     return arr;
// }

// console.log(changeCollection([1,2,3], ['a', 'b', 'c']));

// const users = [
// {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ];


// function filterUsers(arr, key, value) {
//     let arrUsers = [];

//     if(arguments.length == 3) {
//         if (Array.isArray(arr)) {
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i][key] === value) {
//                     arrUsers.push(arr[i]);
//                 }
//             }
//         } else {
//             return new Error('мало агр');
//         }
//     } else {
//         return new Error('1Error message');
//     }

//     if (arrUsers.length === 0) {
//         return new Error('2Error message');
//     } else {
//         return arrUsers;
//     }
// }

// console.log(filterUsers(users, "age", 36));

// !ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВОВ


const users = [
    {
        "_id": "5e36b779dc76fe3db02adc32",
        "balance": 2,
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Berg Zimmerman",
        "gender": "male"
      },
      {
        "_id": "5e36b779d117774176f90e0b",
        "balance": 3,
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "name": "Deann Winters",
        "gender": "female"
      },
      {
        "_id": "5e36b779daf6e455ec54cf45",
        "balance": 4,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Kari Waters",
        "gender": "female"
      }
    ];

// users.forEach((user, i, arr) => {
//     console.log(i, arr);
// });
//user - 1 элемент массива, i - номер элемента в массиве, arr  весь массив,
// ?filter
// const userLess30 = users.filter(user => user.age >= 36);//* создает массив из отфильтрованных элементов

// console.log(userLess30);

// ?map возвращает элементов из тех элементов, которые вернет коллбэк на каждой итерации
// const userName = users.map(user => user.name);
// console.log(userName);

//?reduce позволяет развернуть массив, преобразовать массив в другную сущность или посчитать

// const totalBalance = users.reduce((acc, user) => {
//     console.log(acc);
//     return acc += user.balance;
// }, 0);// *0 - стартвое значеение, acc- результат предыдущей итерации
// console.log(totalBalance);

//? some/every
//* some - возвращает true или false, если хотя бы для одного элемента массива вернется true
//* every - возвращает true или false, если для всех элементов массива вернется true

// ?find позволяет найти элемент в массиве


//? метод сортировки Sort
//* изменяет исходный массив, сортирует по лексическому значению(по умолчанию), т.е. числа будет сортировать неправильно
const numArr = [10, 7, 44, 32];
numArr.sort((prev, next) => {
    console.log(prev, next);
    return prev - next;
});
// *если prev - next больше нуля, то преставляет, елси 0, то оставляет, если меньше нуля, то оставляет 

console.log(numArr);

const arr  = [1,2,3,5,8,9,10];
const newArr = arr.map(el => el % 2 == 0 ? {'digit': el, 'odd': true}  : {'digit': el, 'odd': false});
console.log(newArr);


const arr2  = [12, 4, 50, 1, 0, 18, 40];
console.log(arr2.some(el => el == 0));

const arr3  = ['yes', 'hel', 'no', 'easycode', 'what'];
console.log(arr3.every(el => el.length > 3));

// ?Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например: [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”-
const arr4 = [
  {char:"a",index:12}, 
  {char:"w",index:8}, 
  {char:"Y",index:10}, 
  {char:"p",index:3}, 
  {char:"p",index:2},
  {char:"N",index:6}, 
  {char:" ",index:5}, 
  {char:"y",index:4}, 
  {char:"r",index:13}, 
  {char:"H",index:0},
  {char:"e",index:11}, 
  {char:"a",index:1}, 
  {char:" ",index:9}, 
  {char:"!",index:14}, 
  {char:"e",index:7}
];

const str3 = arr4.sort((prev, next) => prev.index - next.index).reduce((acc, letter) => acc += letter.char, '');

console.log(str3);

const arr5 = [ [14, 45], [1], ['a', 'c', 'd'] ];

arr5.sort((prev, next) => prev.length - next.length);
console.log(arr5);

const arr6 = [
  {cpu: 'intel', info: {cores:2, сache: 3}},
  {cpu: 'intel', info: {cores:4, сache: 4}},
  {cpu: 'amd', info: {cores:1, сache: 1}},
  {cpu: 'intel', info: {cores:3, сache: 2}},
  {cpu: 'amd', info: {cores:4, сache: 2}}
];

console.log(arr6.sort((prev, next) => prev.info.cores - next.info.cores));


let products = [
  {title: 'prod1', price: 5.2}, 
  {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, 
  {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, 
  {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, 
  {title: 'prod8', price: 63}
];

function filterCollection(products, smallPrice, bigPrice) {
  return products
            .filter(product => product.price > smallPrice && product.price < bigPrice)
            .sort((prev, next) => prev.price - next.price);
}
  
console.log(filterCollection(products, 15, 30));

//? Методы которые часто забывают
//? Копирование объеков
let obj1 = {
  name: 'Denis'
};

let obj2 = {
  name: 'Флф',
  age: '20',
  items: {
    granade: 2
  }
};

// let newObj = obj1; // *при таком методе создатся ссылка на объект, а не скопируется

let newObj = Object.assign({},obj1, obj2  ); //* первым принимает таргет, т.е. объект, куда копировать, и потом принимает неопределенное количество объектов, которое нужно скопировать в таргет. Копирование не глубокое, если изменить объект items в newObj, то он изменится и в obj2


//* порядок добавления новых объектов в таргет также  влияет на значения внутри объекта
newObj = JSON.parse(JSON.stringify(obj2)); //* глубокое копирование
newObj.items.granade = 3;
console.log(newObj, obj2.items.granade);

let key = Object.keys(newObj);// *вернет массив с ключами объекта

let values = Object.values(newObj);// *вернет массив с значения объекта
console.log(values);

let entries = Object.entries(newObj);// *вернет массив с c массивами, в которых будут элементы ключ - значение ['name', 'Kirill']

let fromEntries = Object.fromEntries(entries);//*собирает обратно в объект, !!не работает в node!!
console.log(fromEntries);





