const title = document.querySelector('h1');

title.innerHTML//*меняет код html внутри элемента(перезаписывает)

title.textContent//*меняет только текст внутри элемента
// title.appendChild();//*принимает узел и добавляет внутрь элемента
title.insertAdjacentHTML('beforeend', '<h2>title2</h2>')//*вставляет текст/код в указанное место
/*
  beforerbegin
  afterbegin
  beforeend
  afterend
*/
// title.insertAdjacentElement('afterbegin', '<h2>title2</h2>')

//! innerHTML лучше не использовать, т.к. при его использовании, он затирает все ссылки и мы теряем доступ к элементам 

const span = document.createElement('span');//*создание элемента, создается только в одном экземляре и на него будет одна ссылка. Если добавить два раза, то из первого он пропадет и добавится во второй
span.textContent = 'span created';
title.appendChild(span);

//! лучше сначала создать все элементы, завернуть его в какой-нить див или фрагмент и потом добавить на страницу. Это хорошо отразится на производительности. Т.к. при доавлении нового элемента на страницу каждый раз вызывается прорисовка. Лучше, чтобы она вызвалась один раз.

const fragment = document.createDocumentFragment();
const colors = ['black', 'yellow', 'orange'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add('color');
  item.textContent = color;
  fragment.appendChild(item);
});
document.body.appendChild(fragment);
//*сам фрагмент не добавляется, он «выкидывает свое содержимое и исчезает»

// title.remove();//*удаляет элемент со страницы(не поддерживает IE-11)
title.parentElement.removeChild(title);//*тоже самое, но с поддержкой IE-11