
const titles = document.querySelectorAll('h1');
const div = document.querySelector('div');
console.log(titles); 
console.log(Array.from(titles), [...titles]); //*чтобы работать с элементами документа как с обычными массивами, нужно преобразовать их в массив(или [...titles])
//*nodeList - неживая коллеция. Если в документе удалятся какие -то элементы, то в полученных элементах они будут доступны
//*HTMLCollection - живая коллекция
console.log(div.nextSibling);//*вернет текст, т.к. после div - это след.узел
console.log(div.nextElementSibling);//*вернет след элемент
div.firstChild//*первый внутренний узел
div.firstElementChild//*первый внутренний элемент




