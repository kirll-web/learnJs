const btn = document.querySelector('button');
// btn.onclick = function() {
//   console.log('click');
// }//*минус способа в том, что нельзя навесить несколько обработчиков событий. Будет срабатывать последний объявленный

btn.addEventListener('click', function(event) {
  console.log(this);
  console.log('click 1');
});//*1 арг - событие, 2 арг - обработчик события, 3 арг - объект с определенными свойсами

function click(event) {
  console.log('click 2');
}

btn.addEventListener('click', click);//* каждый обработчик принимает объект события event, 

//*event.preventDefault() прерывает дефолтное действие

btn.removeEventListener('click', click);//*удаление события, 1 арг - событие, 2 арг - имя обработчика события. Анонимную функцию удалить не можем, поэтому надо сначала объявить функцию с именем и потом ее удалять

btn.addEventListener('click', (e) => {
  console.log(this);
  console.log('click 3');
  console.log(e.target);//*элемент, на котором сработало событие. С помощью него можно реализовать делегирование событий
});//* можно объявить стрелочную функцию. У стрелочной функции this указывает на объект Window