const car = {
  brand: 'audi',
  year: 2019,
  get age() {
    return `Машина выпущена ${this.year}`;
  },
  set age(value) {
    this.year = value;
  }
};

// Object.defineProperty(car, 'age', { 
 
//   configurable: false,//* не можем удалить свойсто,  но можно перезаписать
//   enumerable: false,//*делает свойсто неитерируемым(для .keys, .values, for in  его не существует),
//    // writable: true, //* нельзя перезаписать, но можно удалить
//   get: function() {
//     return `Машина выпущена ${this.year}`;
//   },
// });//*определяет некие настройки для объекта и свойств в нем

//*getter, setter - скрытие какой-то логики, часть инкапсуляции. Позволяют скрыть/обезопасить код, конвертировать в нужные для пользователя значения/виды
car.age = 2020;
console.log(car.age);

Object.defineProperty(window, 'globalVar', {
  set: function(value) {
    debugger;// находит место где меняется глобальная переменная globalVar
  }
});

function foo() {
  globalVar = 10;
}

foo();
console.log(globalVar);


