//? Зная структуру html, с помощью изученных методов получить (в консоль)
//? 1. head
//? 2. body
//? 3. все дочерние элементы body и вывести их в консоль.
//? 4. первый div и все его дочерние узлы
//?   а) вывести все дочерние узлы в консоль
//?   б) вывести в консоль все дочерние узлы, кроме первого и последнего
//? Для навигации по DOM использовать методы, которые возвращают только элементы

// const headHtm = document.querySelector('head'),
//       bodyHtm = document.querySelector('body'),
//       allChildsBody = bodyHtm.children,
//       div = document.querySelector('div'),
//       allChildsDiv = div.childNodes,
//       allChildsDivToArray = Array.from(allChildsDiv);
//       allChildsDivToArray.pop();
//       allChildsDivToArray.shift();
      
//       // head = document.querySelector('head');

// console.log(headHtm);
// console.log(bodyHtm);
// console.log(allChildsBody);
// console.log(div);
// console.log(allChildsDiv);
// console.log(allChildsDivToArray);

//? Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//?  isParent(parent, child)
//?  isParent(document.body.children[0], document.querySelector('mark'))
//?  true так как первый див является родительским элементом для mar
//?  isParent(document.querySelector('ul'), document.querySelector('mark'))
//?  false так ul НЕ является родительским элементом для mar
//?  Функция принимает только DOM объекты. Обязательно проверяйте это.

function isParent(parent, child) {
  const childsParent = parent.children;
  console.log(parent,  parent.children);
  for(let i = 0; i < childsParent.length; i++) {
    console.log(childsParent[i], child);
    if (childsParent[i] === child) {
      return true
    }
  }
  return false;
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));
// console.log(document.querySelector('mark'));
//!! тут вопрос, непонятно как делать
//& тут похожая реализация под эту задачу, взял из другого своего задания
for(let i = 0; i < document.links.length; i++) {
  let currentElement = document.links[i],
  parentElement = document.links[i].parentElement;

  if(currentElement.closest('ul') == ul) {
    arrLinks.push(currentElement.textContent);
  }
}
return arrLinks;

const li = document.querySelector('ul').children;
let arrLinks = [];
for(let i = 0; i < li.length; i++) {
  arrLinks.push(li[i].children[0]);
}
console.log(arrLinks);