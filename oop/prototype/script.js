
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

console.log(apple instanceof Product)//*проверка, от чего был создан объект


//* prototype — свойство объектов, которое содержит свойства и методы родителей, и родителей родителей. Есть у любого объекта. нужен для того, чтобы те экземпляры, которые порождаются от определенных классов, имели общий доступ к их методам и свойствам
//* 

//*запись метода в прототип
Product.prototype.getPriceWithDiscound =  function() {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function(newPrice) {
  this.price = newPrice;
}

apple.setPrice(550);
console.log(apple.getPriceWithDiscound())

