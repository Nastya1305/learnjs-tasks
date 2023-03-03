// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

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
// Напишите функцию printList(list), которая выводит элементы списка по одному.
//Сделайте два варианта решения: используя цикл и через рекурсию.

function printList_1(list) {
   while (list) {
      console.log(list.value);
      list = list.next;
   }
}

function printList_2(list) {
   console.log(list.value);

   if (list.next) {
      printList_2(list.next);
   }
}

printList_1(list);
printList_2(list);