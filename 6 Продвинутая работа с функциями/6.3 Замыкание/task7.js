function makeArmy() {
   let shooters = [];

   let i = 0;
   while (i < 10) {

      let j = i;
      //!   Т.к. i во внешнем лекс. окружении при вызове shooter сохранено как 10, используем локальную переменную j.
      //!   Лекс. окружения, где были созданы функции будут с разными j.

      let shooter = function () {
         console.log(j);
      };
      shooters.push(shooter);
      i++;
   }

   return shooters;
}

let army = makeArmy();

army[0]();
army[5]();


//можно было использовать цикл for