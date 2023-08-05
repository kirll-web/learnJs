//? Вопросы к этому заданию
//? Найти в коде список ul и добавить класс “list”

//?? Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

//? На li через один (начиная с самого первого) установить класс “item”

//? На все ссылки в примере установить класс “custom-link”

const ul = document.querySelector('ul');
ul.classList.add('list');

(function findLinkAfterUl(ul) {
  let currElem = ul.nextElementSibling;
  while(currElem.nodeName != 'A') {
    currElem = currElem.nextElementSibling
  }
  console.log(currElem);
  currElem.id = 'link';
})(ul);

const childrenUl = ul.children;
for(let i = 0; i < childrenUl.length; i++) {
  if(i % 2 === 0) {
    childrenUl[i].classList.add('item');
  }
}

for(let i = 0; i < document.links.length; i++) {
  document.links[i].classList.add('custom-link');
}


