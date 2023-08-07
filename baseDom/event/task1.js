
//? По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.querySelector('#btn-msg');
btnMsg.addEventListener('click', function() {
  alert(this.getAttribute('data-text'));
  //* alert(e.target.dataset.text); можно было так
});

//? При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btnMsg.addEventListener('mouseover', function() {
  this.classList.add('btn_red');
});

btnMsg.addEventListener('mouseout', function() {
  this.classList.remove('btn_red');
});

//? При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

// const [...nodes] = document.body.childNodes;
const idTag = document.querySelector('#tag');
// nodes.forEach(node => { 
//   node.addEventListener('click', function() {
//     idTag.textContent = this.nodeName;
//   });
// });

document.body.addEventListener('click', (e) => {
  idTag.textContent = e.target.nodeName;
});



//? При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const btnGenerate = document.querySelector('#btn-generate'),
      ul = document.querySelector('ul');
let countChildrenUl = ul.children.length;

btnGenerate.addEventListener('click', () => {
  const el = document.createElement('li');
  countChildrenUl++;
  el.textContent = `item ${countChildrenUl}`;
  ul.appendChild(el);
});
