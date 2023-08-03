'use strict';
function getThis() {
    console.log(this); //ссылается на глобальный объект, либо на window  в браузере, если строгий режим, то вернет undefined
}
getThis();

function getPrice() {
    console.log(this);
}

const prod1 = {
    name: 'intel',
    price: 100,
    getPrice,
    getName() {
        console.log(this.name);
    },
    info: {
        information: ['aldslasd'],
        getInfo: function() {
            console.log(this);
        }
    }
};

prod1.getPrice();// будет указывать на объект прод1, то есть будет ссылаться на объект, в котором создана данная функция\


const prod2 = {
    name: 'amd',
    price: 100,
    getPrice
};

prod1.getName();

prod1.info.getInfo();// ссылается на ближайшую функцию, не важно где и как была определена функция, зависит от контекста вызова

prod2.getName = prod1.getName;

prod2.getName();//не смотря на присвоение, this привяжется к тому объекту, для которого он был вызван

let str = 'hello world';
const reversStr = str //вызов метода цепочки
.split('') // вернет массив из букв строки
.reverse() // перевернет массив
.join(''); //соеденит элементы массива в строку
console.log(reversStr);


//методы call и apply
getPrice.call(prod3);//вызовет функцию в зависимости от переданного контекста
getPrice.call(prod3, '*'); //* - переданный аргумент 


getPrice.apply(prod3, ['*']); //аргументы принимает в виде массива

function f() {
  alert(this);
}

var wrapped = f.bind({a: 'abc'});

// f();         // [object Window]
wrapped();   // abc

const rectangle = {
  width: 20, 
  height: 2, 
  getSquare: function(){
    console.log(this.width * this.height);
  }
};

rectangle.getSquare();

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
};

numerator.double().plusOne().plusOne().minusOne();

numerator.value // 3



const objProductsFirstZadanie = {
    products: 5,
    price: 10,
    getPriceAllProducts: function() {
        return this.products * this.price;
    }
};

function getPriceAllProducts(elem, price) {
    return elem * price;
}

const objProducts = {
    products: 5,
    price: 10,
    getPriceAllProducts: function() {
        return this.products * this.price;
    }
};

objProducts.getPriceAllProducts();


const objDetails = {
    products: 2,
    price: 10,
};

objDetails.getPriceAllProducts = objProducts.getPriceAllProducts;

console.log(objDetails.getPriceAllProducts());

let sizes = {width: 5, height: 10};

const getSquare = function () {
    return this.width * this.height;
};

console.log(getSquare.apply(sizes));

// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;

getElementHeight(); // undefined

getElementHeight = getElementHeight.bind(element);

console.log(getElementHeight());

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
