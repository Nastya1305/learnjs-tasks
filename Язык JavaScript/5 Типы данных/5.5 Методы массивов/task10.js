// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.



//! алгоритм «Тасование Фишера — Йетса» дает одинаковые вероятности

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

      // поменять элементы местами
      [array[i], array[j]] = [array[j], array[i]];
   }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
   '123': 0,
   '132': 0,
   '213': 0,
   '231': 0,
   '321': 0,
   '312': 0
};

for (let i = 0; i < 1000000; i++) {
   let array = [1, 2, 3];
   shuffle(array);
   count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
   console.log(`${key}: ${count[key]}`);
}