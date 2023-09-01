// const User = {// * плохой метод, т.к. мы имеем прямой доступ к нашим полям, можем их переопределить, заменить и т.д. Нет приватности и все свойства публичные
//   name: 'Denis',
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   }
// }


// function User(name) {
//   let userName = name;

//   return {
//     getName() {
//       return this.name;
//     },
//     setName(name) {
//       this.name = name;
//     }
//   }
// }

// const kirill = new User('Kirill');//*у нас нет прямого доступа и можем работать только в рамках тех методов, которые объявлены. Но есть другая проблема, можно переопределить методы kirill.getName = function() {return 'upss...'}

// function User(name) {
//   let userName = name;

//   return Object.freeze({
//     getName() {
//       return this.name;
//     },
//     setName(name) {
//       this.name = name;
//     }
//   });

//   // *  Object.freeze запрещает изменение свойств и методов объекта


// }

// const kirill = new User('Kirill');

// function User(name) {
//   const symbol = Symbol();//* Symbol возвращает уник.ид, которыйц не равен любому другому символу. В основном испоьзуется для некоторых внутренних процессов в JS, чтобы избежать конфликтов имён

//   return {
//     [symbol]: name,
//     getName() {
//       return this[symbol];
//     },
//     setName(name) {
//       this[symbol] = name;
//     }
//   }

// }

// const kirill = new User('Kirill');