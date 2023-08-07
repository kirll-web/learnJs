//? 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь. Вот массив (список) рандомных цветов
//? ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// const boxes = document.querySelectorAll('.box');
// const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
// boxes.forEach(box => {
//   box.addEventListener('mouseover', (e) => {
//     e.stopPropagation();
//     let boxChild = box.firstElementChild;
//     while(boxChild) {
//       boxChild.style.background = colors[Math.floor(Math.random() * 10)];
//       boxChild = boxChild.firstElementChild;
//     }
//   });
// });


//? 2. Возращаете фон обратно когда пользователь уводит мышку с блока.


// function changeColor(boxChild, colors) {
//   if(boxChild) {
//     boxChild.style.background = colors[Math.floor(Math.random() * 10)];
//     return boxChild.firstElementChild;
//   } 
//   return false;
// }

// function clearColor(boxChild, color) {
//   if(boxChild) {
//     boxChild.style.background = color;
//     return boxChild.firstElementChild;
//   }
//   return false;
// }

// const boxes = document.querySelectorAll('.box');
// const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// boxes.forEach(box => {
//   box.addEventListener('mouseout', (e) => {
//     // e.stopPropagation();
//     let boxChild = box.firstElementChild;
//     while (boxChild) {
//       boxChild = clearColor(boxChild, '#ffffff');
//     }
//   });
// });

// boxes.forEach(box => {
//   box.addEventListener('mouseover', (e) => {
//     e.stopPropagation();
//     let boxChild = box.firstElementChild;
//     while(boxChild) {
//       boxChild = changeColor(boxChild, colors)
//     }
//   });
// });

//? 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.

function changeColor(boxChild, ms, colors) {
  if(boxChild) {
    boxChild.style.background = colors[Math.floor(Math.random() * 10)];
    ms += 200;
    boxChild = boxChild.firstElementChild;
    setTimeout(changeColor, ms, boxChild, ms, colors);
  }
  return false;
}

function clearColor(boxChild, color) {
  if(boxChild) {
    boxChild.style.background = color;
    return boxChild.firstElementChild;
  }
  return false;
}

const boxes = document.querySelectorAll('.box');
const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
boxes.forEach(box => {
  box.addEventListener('mouseout', (e) => {
    // e.stopPropagation();
    let boxChild = box.firstElementChild;
    while (boxChild) {
      boxChild = clearColor(boxChild, '#ffffff');
    }
  });
});

boxes.forEach(box => {
  box.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    let boxChild = box.firstElementChild;
    let ms = 0;
    setTimeout(changeColor, ms, boxChild, ms, colors);
  });
});

// !Решение преподавателя
function setRandomColor(el) {
  const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
  // Выбираем произвольный цвет из массива
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = randomColor;
}

function resetColor(el) {
  el.style.background = '';
}

function onBoxHover(e) {
  // Создаем массив элементов которые будут менять фон.
  let elements = [e.currentTarget];
  let currentEl = e.currentTarget;
  // Проходимся циклом по всем дочерним элементам до самого последнего
  while (currentEl) {
    elements = [...elements, ...currentEl.children];
    currentEl = currentEl.children[currentEl.children.length - 1];
  }
  // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
  elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
}

function onMouseLeave(e) {
  resetColor(e.currentTarget);
}

document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));