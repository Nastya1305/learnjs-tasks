// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, 
// передавая вызов в f не более одного раза в ms миллисекунд. 
// Те вызовы, которые попадают в период «торможения», игнорируются.

//* Отличие от debounce – если проигнорированный вызов является 
//* последним во время «задержки», то он выполняется в конце.

function throttle(f, ms) {
   let ignoring = false;
   let lastArgs, lastThis;

   function wrapper() {
      if (!ignoring) {

         f.apply(this, arguments);
         ignoring = true;

         setTimeout(() => {
            ignoring = false;

            if (lastArgs) {
               wrapper.apply(lastThis, lastArgs);
               lastArgs = lastThis = null;
            }
         }, ms);

      } else {
         lastArgs = arguments;
         lastThis = this;
      }
   };

   return wrapper;
}

function f(a) {
   console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

 // когда 1000 мс истекли ...
 // ...выводим 3, промежуточное значение 2 было проигнорировано