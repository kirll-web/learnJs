// import { conf, foo } from './module1';// если задать conf as c, то переменная будет доступна под именем c
import * as mod1 from './module1'; //* "*" используется для импорта всего, что экспортирует модуль 


import Product from './module2';//*к дефолтным экспортам as не применяется. Выдаст ошибку

mod1.foo();
console.log(mod1.conf);
console.log(new Product('apple'))