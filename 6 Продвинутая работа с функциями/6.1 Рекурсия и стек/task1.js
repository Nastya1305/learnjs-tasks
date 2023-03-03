// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumTo_1(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}

function sumTo_2(n) {
   if (n <= 0) {
      return n;
   }
   return n + sumTo_2(n - 1);
}

function sumTo_3(n) {
   return (1 + n) * n / 2;
}


//-----------------------------------------------------------------------------

function bench(f) {
   let start = Date.now();
   for (let i = 0; i < 100000; i++) f(100);
   return Date.now() - start;
}

let time1 = 0;
let time2 = 0;
let time3 = 0;

for (let i = 0; i < 10; i++) {
   time1 += bench(sumTo_1);
   time2 += bench(sumTo_2);
   time3 += bench(sumTo_3);
}

console.log('Итоговое время sumTo_1: ' + time1);
console.log('Итоговое время sumTo_2: ' + time2);
console.log('Итоговое время sumTo_3: ' + time3);


//console.log(sumTo_2(100000)); //!RangeError: Maximum call stack size exceeded