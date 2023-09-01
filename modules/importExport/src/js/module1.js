// export function myFunction() {
//   console.log('module1, myFunction');
// }

// export const config = {//*если убрать export, то переменная будет доступна только внутри модуля
//   apiUrl: 'demo.com'
// }

function myFunction() {
  console.log('module1, myFunction');
}

const config = {//*если убрать export, то переменная будет доступна только внутри модуля
  apiUrl: 'demo.com'
}

export { config as conf, myFunction as foo }//* результат будет точно такой же

