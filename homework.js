
///console.log("Hello, world!"); ///1. Вывод Hello, world! в консоль
///let number = 5; 
///const number = 5;
///console.log(typeof number);///2. Вывод типа переменной number в консоль (number)
///let text = "Hello, world!";
///const text = "Hello, world!";
///console.log(typeof text);///3. Вывод типа переменной text в консоль (string)
///let statement = true;
///const statement = false;
///console.log(typeof statement);///4. Вывод типа переменной statement в консоль (boolean)
///let value = null;
///const value = null;
///console.log(typeof value);///5. Вывод типа переменной value в консоль (object)
///let nothing;
///const nothing;
///console.log(typeof nothing);///6.Вывод типа переменной nothing в консоль (undefined)
///console.log(number, text, statement, value, nothing);///7. Вывод всех переменных в консоль
///console.log( typeof number, typeof text, typeof statement, typeof value, typeof nothing);
///console.log(typeof(number), typeof(text), typeof(statement), typeof(value), typeof(nothing));///8. Вывод типов всех переменных в консоль
///const change = 6;
///let change = 7;
///console.log(change); ///9. Вывод переменной change в консоль
///Ошибка: SyntaxError: Identifier 'change' has already been declared
    ///at wrapSafe (node:internal/modules/cjs/loader:1804:18)
    ///at Module._compile (node:internal/modules/cjs/loader:1846:20)
   ///at Object..js (node:internal/modules/cjs/loader:2003:10)
    ///at Module.load (node:internal/modules/cjs/loader:1594:32)
    ///at Module._load (node:internal/modules/cjs/loader:1396:12)
    ///at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    ///at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    ///at node:internal/main/run_main_module:33:47

///Node.js v24.19.0

///а.Создать объект user с полями name и age
///const user = {
   /// name: "Oleg",
    ///age: 29
///};
///б. Изменить обьект user, изменив поле name на "Ivan"
///user.name = "Ivan";
///console.log(user); 

///const person = {
    ///name: "Oleg",
    ///age: 29
///};
///person.name = "Ivan";
///в. Изменить обьект полностью
///const person = {
    ///name: "Ivan",
    ///age: 30
///}
///person = {
    ///name: "Oleg",
    ///age: 29
///}
///console.log(person); ///Нельзя изменить обьект полностью, так как он объявлен как const, но можно изменить его поля. Ошибка: TypeError: Assignment to constant variable.
///let person = {
   ///name: "Oleg",
    ///age: 29
///};///Можно заменить обьект полностью, который обьявлен как let, так как он не является константой
///person = {
    ///name: "Ivan",
    ///age: 30
///};
///console.log(person);
///7. обьявить переменную с помощью var и изменить ее значение
///var person = {
   ///name: "Oleg",
   ///age: 29
///};
///person = {
    ///name: "Ivan",
    ///age: 30
///};
///console.log(person);
///отличаются областью видимости и возможностью изменения значения: переменную, созданную через var, можно изменять и объявлять повторно, а её область видимости распространяется на всю функцию; переменная let доступна только внутри блока {} и может изменяться, но не может быть объявлена повторно в той же области; переменная const также доступна только внутри блока, но после создания её нельзя переприсвоить, поэтому в современном коде обычно используют const, если значение не должно меняться, и let, если его нужно изменять, а var стараются не использовать.
