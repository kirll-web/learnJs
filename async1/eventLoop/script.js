//*JS — одновременно компилируемый и интерпретируемый язык. JS-движок компилирует код за микросекунды до его исполнения. Это называется JIT(Just in time compilation). Код компилируется движком, а не браузером. В каждом браузере есть свой движок.

//* heap - глобальная память(куча), в которой JS-движок хранит перменные и объявления функций. И когда он прочитает приведенный код, то в глоб.памяти появятся два биндинга.

//* call stack - стек вызовов, в него все добавляется сверху. Они не могут исключаться из структуры, пока над ними есть другие элементы

//* глобальный контекст исполнения - глобал.среда, в которой исполняется js-код

//* локальный контекст исполнения - для каждй вложенной функции движок создает свои локальные контексты исполнения

//* JS — однопоточный, потому что наши функции обрабатывает лишь один стек вызовов. Это не является проблемой, пока мы не работаем с setTimeout и сетевыми запросами.

//* event loop - цикл событий, проверяет пуст ли стек вызовов, есть ли в очереди коллбэков какие-нибудь функции, он эти функции отправляет в стек вызовов

console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);