const plus = (x = 0,y = 0) => x + y; // сокращенная запись , также можно передавать параметры по умолчанию
const plusRes = plus(1, 2); 
console.log(plusRes);

const withoutArgs = () => {
    console.log('hello word'); //многострочная стрелочная функция
};

const singleArg = x => x * 2; //если один аргумент, то можно опустить скобки

const singleArg2 = x => {
    console.log(x * 2);
};

singleArg2(2);

const singleArg3 = (x = 3) => { // если хотим испоьзовать параметры по уполчанию, то скобки опускать нельзя
    console.log(x * 2);
};

singleArg2(2);


function plusFoo(x, y) {
    console.log(arguments); // коллекция(объект, псевдомассив) arguments хранит в себе всё, что передали при вызове функции
    return x + y;
}

const returnObj = (str ='') => { //функция возвращения объекта
    // console.log(arguments); // вызовет ошибку, так как у стрелочных функций нет данной коллекции
    return {
        value: str + 'abc',
        lengthStr: str.length
    };
};

console.log(returnObj('a'));

const obj = {
    firstname: 'kirill',
    age: 22,
    getFirstName() {
        console.log(this); // есть контекст вызова
    },
    // getAge: () => {
    //     console.log(this); //нет конекста вызова
    // },
    getAge() {
        setTimeout(() => console.log(this)); // есть контекст вызова
    }
};
obj.getAge();


// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):


function sum() {
const params = Array.prototype.slice.call(arguments);


if (!params.length) return 0;


return params.reduce(function (prev, next) { return prev + next; });
}



console.log(sum(1, 2, 3, 4)); // 10
sum(); // 0


const sum = (...args) => {
    
    if (!args.length) return 0;

    return args.reduce((prev, next) => prev + next);
};

sum(1, 2, 3, 4); // 10
sum(); // 0
console.log(sum());

// что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Переделать функцию с использованием функции-стрелки

const convertToObject = (num) => {
    return {
        value: num, 
        isOdd: Boolean(num % 2)
    };
};
    
console.log(convertToObject(3));



