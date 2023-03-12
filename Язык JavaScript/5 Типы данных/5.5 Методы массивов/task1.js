// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
"use strict";

function camelize(str) {
   return str
      .split('-')
      .map((item, index) => {
         return (index > 0) ? (item[0].toUpperCase() + item.slice(1)) : item;
      })
      .join("");
}

console.log(camelize("my-short-string"));