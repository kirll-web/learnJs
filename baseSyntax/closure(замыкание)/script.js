//? замыкакние - функция, которая ссылается на свободные переменные. Свободные переменные - это переменные, которые не были объявлены внутри данной функции и не были переданы как параметры. Функция запоминает то окружение, в котором она была создана и имеет к нему доступ. Также она имеет доступ к окружению, которое выше и может получать доступ к окружению родительской функции и так далее.

function getFullName(firstname, lastname) {
    console.log(firstname, lastname);
    return function() {
        return `${firstname} ${lastname}`
    };
}

const getname =  getFullName('kirll', 'web');
console.log(getname());


function updateValue(val) {
    let x = val;
    console.log(x);
    return function(num=0) {
        return x+=num;
    };
}

const updVal = updateValue(2);
console.log(updVal(1));//3
console.log(updVal(0));//*3, значение не изменилось, потому что повторный вызов функции запомнил изменение первого вызова
//* если создать updVal2(), то значения будут разными, потому что при новом вызове updateValue создается новый контекст исполнения и новое лексическое окружение

function minus(num = 0) {
    let x = num;
    return function(val = 0) {
        return x -= val;
    };
}

console.log(minus(10)(6)); // 4
console.log(minus(5)(6)); 
console.log(minus(10)()); 
console.log(minus()(6)); 
console.log(minus()()); 


function multiplyMaker(val){
    let x = val;
    return function(num) {
        return x *= num;
    };
}

const multiply = multiplyMaker(2);

multiply(2);
multiply(1);
multiply(3);
multiply(10);

let str5;

const moduleStr = {
    setStr: function(val) {
        str5 = val == ''  ? '' 
        : typeof(val) == 'number' ? String(val) : val;
    },
    getStr: function() {
        return str5;
    },
    getLength: function() {
        return str5.length;
    }
};

moduleStr.setStr('hello');
console.log(moduleStr.getStr());
console.log(moduleStr.getLength());

let result = 0;

const moduleCal = {
    setResult: function(val) {
        result = val;
        return moduleCal;
    },
    addNum: function(num) {
        result += num;
        return moduleCal;
    },
    mulNum: function(num) {
        result *= num;
        return moduleCal;
    },
    getRes: function() {
        result = Math.floor(result);
        return result;
    }
};

console.log(moduleCal.setResult(10).addNum(5).mulNum(2).getRes(10));

const numModule = (function (){
    let num = 0;
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
  // ! ПОСМОТРИ СЮДА БЛЯТ
    function setNumber(val = 0) {
      num = Number(val);
      return this;
    }
  
    function plus(val) {
      num += Number(val);
      return this;
    }
  
    function minus(val) {
      num -= Number(val);
      return this;
    }
  
    function devide(val) {
      num /= Number(val);
      return this;
    }
  
    function pow(ex = 2) {
      num = Math.pow(num, ex);
      return this;
    }
  
    function getNumber() {
      return  Number(num.toFixed(2)) || 0;
    }
  
    return {
      setNumber,
      plus,
      minus,
      devide,
      pow,
      getNumber
    }
  }());
  
  console.log(
    numModule
      .setNumber(3)
      .pow(2)
      .getNumber()
  )