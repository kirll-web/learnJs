//? Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

//? <ul>

//? <li><a href="#">Link1</a></li>
//? ...

//? <li class=”new-item”>item 5</li>

//? <li class=”new-item”>item 6</li>

//? </ul>

//? Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

const amountLi = 5;
const ul = document.querySelector('ul');
const fr = document.createDocumentFragment();
for(let i = 0; i < amountLi; i++) {
  let li = document.createElement('li');
  li.classList.add('new-item');
  li.textContent = `item ${i+1}`;
  fr.appendChild(li);
}
ul.appendChild(fr);

//? В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).


const [...links] = document.links;
links.forEach(link => {
  let currentElement = link;
  if(currentElement.closest('ul') == ul) {
    currentElement.insertAdjacentHTML('beforeend', '<strong>Strong</strong>');
  }
});

//? В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const img = document.createElement('img');
img.setAttribute('src', 'https://www.fonstola.ru/images/201112/fonstola.ru_64710.jpg');
img.setAttribute('alt', 'picture');
img.style.width = '200px';
document.body.insertAdjacentElement('afterbegin', img);

//?Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector('mark');
mark.textContent += 'green';
mark.classList.add('green');

//? Отсортировать li внутри списка в обратном порядке (по тексту внутри)
const [...li] =  ul.children;
li.sort((prev,next) => {
  return prev.textContent > next.textContent ? -1 : 0
});
li.forEach(item => fr.appendChild(item));
ul.appendChild(fr)


