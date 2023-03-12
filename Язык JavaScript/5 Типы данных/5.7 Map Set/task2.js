// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
   let map = new Map();
   let key = "";

   arr.forEach(element => {
      key = element.toLowerCase().split("").sort().join("");
      map.set(key, element);
   });

   return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"