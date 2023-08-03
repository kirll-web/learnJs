const arr = ['kirill', 'masha', 'elya'];

function mapArray(arr, fn) {
    const res = [];

    for(let i = 0; i< arr.length; i++) {
        res.push(fn(arr[i]));
    }
    console.log(res);
    return res;
    
}

function nameLength(el) {
    console.log(el);
    return el.length;
}

mapArray(arr, nameLength);

function greetins(firstname) {
   return function(lastname) {
    return `hello, ${firstname} ${lastname}`;
   } ; //возврашает функцию
}

const fullname = greetins('Kirll')('Web');
console.log(fullname);

function min(year) {
    return 2023 - year;
}

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year =>  min(year));
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);












// 1
function firstFunc(arr, fn) {
    let value = ' ';

    for(let i = 0; i < arr.length; i++) {
        // value += fn(arr[i]);
        
        if (i == 0 && fn(arr[i])[0] == ' ') {
            value += fn(arr[i]).slice(1);
        } else {
            value += fn(arr[i]);
        }
    }

    return `New value:${value}`;
}

function handler1(el) {
    return `${el[0].toUpperCase() + el.slice(1)}`;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
    return ` ${el * 10},`;
}

console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
    return ` ${el.name} is ${el.age},`;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
    return ` ${el.split("").reverse().join("")},`;
}

console.log(firstFunc(['abs', '123'], handler4));

const arr = [1, 45, 5, 43 , 5]; 

function every(arr, fn) {
    let bool;
    if (Array.isArray(arr) &&  typeof(callback && arguments.length >= 2) ==='function') {
        for (let i = 0; i < arr.length; i++) {
            bool = fn(arr[i], i, arr);

            if(!bool) {
                break;
            }
        }
    } else {
        return new Error("с произвольным сообщением.");
    }

    return bool;
}

function callback(el, index, arr) {
    if (el < 5) {
        return false;
    } 
    return true;
}

console.log(every(arr, callback));