window.getComputedStyle(document.documentElement).getPropertyValue("--box-bg");//*получаем стиль css переменной
window.getComputedStyle(document.body).getPropertyValue("--box-bg");//*получаем стиль css переменной
document.body.style.setPropertyValue("--box-bg", "red")//*установка переменной
document.body.style.getPropertyValue("--box-bg")