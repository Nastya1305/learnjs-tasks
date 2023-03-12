// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

Function.prototype.defer = function (ms) {
   let func = this;
   return function () {
      setTimeout(() => func.call(this, ...arguments), ms);
   };
}

function f(a, b) {
   console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.