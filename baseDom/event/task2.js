//? Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.

const dropdownItems = document.querySelectorAll('.dropdown-item'),
      dropdownMenu = document.querySelectorAll('.dropdown-menu');

function dropdownMenuHide(elems) {
  elems.forEach(elem => elem.classList.add('d-none'));
}

dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const dropdownMenuElem = item.querySelector('.dropdown-menu');
    
    if(dropdownMenuElem) {
      if(dropdownMenuElem.classList.contains('d-none')) {
        dropdownMenuHide(dropdownMenu);
        dropdownMenuElem.classList.remove('d-none');
      } else {
        dropdownMenuElem.classList.add('d-none');
      }
    }
  })
});