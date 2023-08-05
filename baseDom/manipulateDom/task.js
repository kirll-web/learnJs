
//? 1.Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector('p');
const pText = p.textContent;
console.log(pText);
//? 2.Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function infoAboutNode(node) {
  return {
    type: node.nodeType,
    name: node.nodeName,
    countChildren: node.children != [] ? node.children.length : 0 
  }
}
console.log(infoAboutNode(p));
//? 3.Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const ul = document.querySelector('ul');
function getTextFromUl(ul) {
  const arrLinks = [];
  // const childrenUl = ul.children;
  // let childrenLi;
  

  // for(let i = 0; i < childrenUl.length; i++) {
  //   childrenLi =  childrenUl[i].children;

  //   for(let i = 0; i < childrenLi.length; i++) {
  //     if(childrenLi[i].nodeName == 'A') {
  //       arrLinks.push(childrenLi[i].textContent);
  //     }
  //   }
  // }
  for(let i = 0; i < document.links.length; i++) {
    let currentElement = document.links[i],
      parentElement = document.links[i].parentElement;
    
    if(currentElement.closest('ul') == ul) {
      arrLinks.push(currentElement.textContent);
    }
  }
  return arrLinks;
}
console.log(getTextFromUl(ul));
//? 4.В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:

for(let i = 0; i < p.childNodes.length; i++) {
  if(p.childNodes[i].nodeName === '#text') {
    p.childNodes[i].textContent = '-text-';
  }
}