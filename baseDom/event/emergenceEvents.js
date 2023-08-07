const btn = document.querySelector('button'),
  wrap = document.querySelector('.wrap');

btn.addEventListener('click', e => {
  // e.stopPropagation();//*убирает всплытие 
  console.log('click btn');
})

wrap.addEventListener('click', e =>  console.log('click wrap'));//*при нажатии на кнопку срабатывает события оберки и кнопки. Произошло погружение события

document.body.addEventListener('click', e =>  console.log('click body'));

wrap.addEventListener('click', e =>  console.log('click wrap'), {capture: true});

document.body.addEventListener('click', e =>  console.log('click body'), {capture: true});//*сначала идет погружение, потом всплытие. То есть сначала срабатывает нижнее событие. Потом верхрнее.