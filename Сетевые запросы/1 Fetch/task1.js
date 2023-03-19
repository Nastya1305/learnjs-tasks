// Создайте асинхронную функцию getUsers(names), 
// которая получает на вход массив логинов пользователей GitHub, 
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// Важные детали:
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, 
// то функция должна возвращать null в массиве результатов.

async function getUsers(names) {
   let promises = [];

   for (name of names) {
      let promise = fetch(`https://api.github.com/users/${name}`)
         .then(
            function (result) {
               if (result.ok) {
                  return result.json();
               } else {
                  return null;
               }
            },
            function (error) {

               return null;
            }
         );
      promises.push(promise);
   }

   let result = await Promise.all(promises);
   return result;
}


async function getUsers1(logins) {
   let results = await Promise.all(logins.map((login) => fetch(`https://api.github.com/users/${login}`)));

   results = results.map((response) => {
      if (!response.ok) {
         return null;
      } else {
         return response.json();
      }
   });
   return (Promise.all(results));
}

(async function () {
   let result = await getUsers(['iliakan', 'remy', 'no.such.users']);
   let result1 = await getUsers1(['iliakan', 'remy', 'no.such.users']);
   //console.log(result);
})();
