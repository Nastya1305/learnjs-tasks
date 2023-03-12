// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
   return Math.random() * (max - min) + min;
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));