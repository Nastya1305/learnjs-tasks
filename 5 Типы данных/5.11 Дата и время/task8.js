// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
   let diff = Date.now() - date;

   if (diff < 1000) {
      return "прямо сейчас";
   }

   if (diff < 60000) {
      return Math.floor(diff / 1000) + " сек. назад";
   }

   if (diff < 3.6e6) {
      return Math.floor(diff / 60000) + " мин. назад";
   }

   let day = ("0" + date.getDate()).slice(-2),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      year = String(date.getFullYear()).slice(2, 5),
      hours = ("0" + date.getHours()).slice(-2),
      minutes = ("0" + date.getMinutes()).slice(-2)

   return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата 
console.log(formatDate(new Date(new Date - 86400 * 1000)));