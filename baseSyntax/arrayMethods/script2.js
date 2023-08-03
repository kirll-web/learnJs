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
val = 'asdasd, ,sadsa ,asdasd, dsds'.split(',');
console.log(val); 


function changeCollection() {
    let arr = [];
    for(let i = 0; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            arguments[i].shift();
            arr[i] = arguments[i];
        }
    }

    return arr;
}

console.log(changeCollection([1,2,3], ['a', 'b', 'c']));

const users = [
{
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
];


function filterUsers(arr, key, value) {
    let arrUsers = [];

    if(arguments.length == 3) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][key] === value) {
                    arrUsers.push(arr[i]);
                }
            }
        } else {
            return new Error('мало агр');
        }
    } else {
        return new Error('1Error message');
    }

    if (arrUsers.length === 0) {
        return new Error('2Error message');
    } else {
        return arrUsers;
    }
}

console.log(filterUsers(users, "age", 36));
