// Результатом декоратора debounce(f, ms) должна быть обёртка, 
// которая передаёт вызов f не более одного раза в ms миллисекунд. 
// Другими словами, когда мы вызываем debounce, это гарантирует, 
// что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {
   let ignoring = false;

   return function () {
      if (!ignoring) {
         f.call(this, ...arguments);
         ignoring = true;
         setTimeout(() => {
            ignoring = false;
         }, ms);
      }
   };
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)