// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(obj) {
   if (Object.keys(obj).length) return false;

   return true;
}