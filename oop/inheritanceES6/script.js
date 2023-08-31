
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

const methodName = 'setPrice';
class ProductES {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  get brand() {
    return this._brand;
  }

  set brand(name) {
    this._brand = name;
  }

  getPriceWithDiscound() {
    return (this.price * (100 - this.discount)) / 100;
  }

  [methodName](newPrice) { //*генерация имени метода. Даёт возможность сокрыть некоторые методы при помощи Symbol
    this.price = newPrice;
  }

  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new ProductES('samsung', 200, 10);


console.log(ProductES.plus(1,2));


class UserES {
  constructor(firstname, lastname) {
    this.firstname = firstname,
    this.lastname = lastname
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`
  }
}

class CustomerES extends UserES { //*с помощью оператора extends происходит наследование класса
  constructor(firstname, lastname, membership) {
    super(firstname, lastname);
    this.membership = membership
  }

  getFullName() {
    console.log(super.getFullName()); //доступ к родительскому результьату методу
    const parentRes = super.getFullName();
    console.log(`${parentRes}, membership: ${this.membership}`);
  }
}

const customerES = new CustomerES('Kirill', 'Dikov', 'basic');
console.log(customerES.getFullName());





