// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers1(from, to) {
   let current = from;

   let timerId = setInterval(() => {

      if (current <= to) {
         console.log(current);
      } else {
         clearInterval(timerId);
      }
      current++;

   }, 1000);
}

function printNumbers2(from, to) {
   let current = from;

   setTimeout(function printNum() {
      console.log(current);
      current++;
      if (current <= to) {
         setTimeout(printNum, 1000);
      }
   }, 1000);
}

printNumbers1(1, 5);
printNumbers2(1, 5);