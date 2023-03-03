// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

function fib(n) {
   let savedNumbers = new Map();
   savedNumbers.set(1, 1).set(2, 1);

   function calculateFib(n) {
      if (!savedNumbers.has(n))
         savedNumbers.set(n, calculateFib(n - 1) + calculateFib(n - 2));

      return savedNumbers.get(n);
   }

   return calculateFib(n);
}


console.log(fib(7));
