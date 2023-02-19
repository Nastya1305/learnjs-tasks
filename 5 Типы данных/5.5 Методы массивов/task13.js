// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(arr) {
   return arr.reduce((result, item) => {
      result[item.id] = item;
      return result;
   }, {});
}

let users = [
   { id: 'john', name: "John Smith", age: 20 },
   { id: 'ann', name: "Ann Smith", age: 24 },
   { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

console.log(usersById);

/*
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/