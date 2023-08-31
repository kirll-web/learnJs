
function Product(brand, price, discount) {//*наименование классов и функций конструктор начинается с заглавной буквы
  console.log(this);
  //1. создается новый объект
  //2. на этот объект устанавливается ссылка this
  //3. возвращает объект

  this.brand = brand;
  this.price = price;
  this.discount = discount;
  // this.getPriceWithDiscound 
}

const apple = new Product('apple', 100, 15);
console.log(apple);

const samsung =  new Product('samsung', 200, 25);
console.log(samsung == apple); //*создаются разные объекты


// *Object.create
const protoForObj = {
  sayHello() {
    return 'hello world';
  }
}

const obj = Object.create(protoForObj, {
  firstName: {
    value: 'Kirill'
  }
}); //* первым аругментом принимает объект, который будет протитпом для нового объекта. Вторым арг-ом передаются новые свойства для создаваемого объекта
console.log(obj);

//* Смысл наследования - взять какие-то методы у родительского класса и расширить их и добавить какие-то новые. Помогает не дублировать код и переиспользовать его.

//* Есть два наследования — функциональное и прототипное

function User(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

User.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
}

User.prototype.sayHello = function() {
  return `Hello ${this.firstname}`;
}

const user = new User('Kirill', 'Dikov');
console.log(user.sayHello);


// function Customer(firstname, lastname, membership) {
  // User.call(this, firstname, lastname); //! функциональное наследование
//   User.apply(this, arguments);
// } 

// const customer = new Customer('Masha', 'Tolmacheva', 'basic');
// !console.log(customer.sayHello()); будет ошибка, т.к. sayHello лежит в прототипе, а оно не наследуюется при функциональном наследовании 

function Customer(firstname, lastname, membership) {
  // User.call(this, firstname, lastname);
  User.apply(this, arguments); //! функциональное наследование

  this.membership = membership;
} 

Customer.prototype = Object.create(User.prototype);//*протипное наследование. При этом мы теряем конструктор
Customer.prototype. constructor = Customer;

Customer.prototype.getMembership = function() {
  return this.membership.toUpperCase();
}

const customer = new Customer('Masha', 'Tolmacheva', 'basic');
console.log(customer.getMembership());
//* запись ES5