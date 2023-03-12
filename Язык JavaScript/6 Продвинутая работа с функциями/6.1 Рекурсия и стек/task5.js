// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
            value: 4,
            next: null
         }
      }
   }
};

function printReversedList_1(list) {
   let savedValues = [];
   while (list) {
      savedValues.push(list.value);
      list = list.next;
   }

   for (let i = savedValues.length - 1; i >= 0; i--) {
      console.log(savedValues[i]);
   }
}

function printReversedList_2(list) {
   if (list.next) {
      printReversedList_2(list.next);
   }

   console.log(list.value);
}

printReversedList_1(list);
printReversedList_2(list);