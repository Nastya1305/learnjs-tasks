// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
   return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

// получаем случайные число от (min-0.5) до (max+0.5), потому что иначе вероятности получения крайних значений уменьшаются