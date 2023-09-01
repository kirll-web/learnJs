let data = {
  name: 'Kirill'
}

// export function getData() {
//   return data;
// }

const symbol = Symbol();

export default class User {
  constructor(firstname) {
    this[symbol] = firstname;
  }

  getFirstName() {
    return this[symbol];
  }
}