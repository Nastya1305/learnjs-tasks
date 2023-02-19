// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
// в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.


function Calculator() {
   this["+"] = (a, b) => a + b;
   this["-"] = (a, b) => a - b;

   this.calculate = function (str) {
      let arr = str.split(" ");

      let operation = arr[1];
      let operand1 = +arr[0];
      let operand2 = +arr[2];

      if (!this[operation] || isNaN(operand1) || isNaN(operand2)) {
         return NaN;
      }

      return this[operation](operand1, operand2);
   };

   this.addMethod = function (name, func) {
      this[name] = func;
   };
}

let calculator = new Calculator();
calculator.addMethod("*", (a, b) => a * b);
calculator.addMethod("/", (a, b) => a / b);
calculator.addMethod("**", (a, b) => a ** b);

console.log(calculator.calculate("2 ** 3"));