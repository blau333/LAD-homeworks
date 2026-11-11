  // const firstObj = { message: "Hello" };
  // const secondObj = firstObj;

  // // const copiedObj = Object.assign({}, firstObj)
  // const stringifyFirstObj = JSON.stringify(firstObj);

  // console.log(stringifyFirstObj);
  // copiedObj.message = "Goodbue!";
  // copiedObj.date = "05.11.26";


  // console.log(firstObj, copiedObj);
  // let nums = [3, 7, 1];
  // const secondNums = [0, 0, 0];
  // const concatNums = [...nums, ...secondNums];

  // // nums.push(...secondNums);
  // console.log(nums)

  // let obj = { a: "Hello" };
  // let secondObj = { b: "Date: 05.11.26"}
  // let newObj = { ...obj, ...secondObj };
  // newObj.b = "Hi!";

  // console.log(obj);
  // console.log(newObj);
  //
  // function sum(a, b, ...rest) {
  //   console.log(rest);
  //   return a + b;
  // }
  // const result = sum(2, 3, 5, 6, 7, 456);
  // console.log(result)
  // const sum = (...rest) => {
  //   return rest.reduce(acc, val) => acc + val, 0);
  // }
  // const result = sum(2, 3, 5, 100);
  // console.log(result);
  // let user = {
  //   name: "Ivan",
  //   sayHi() {
  //     console.log(`Привет, я ${this.name}`)
  //   },
  // };
  // user.sayHi();
  // let admin = {
  //   name: "Sergey",
  //   sayHi,
  // };
  // user.sayHi();
  // // admin.sayHi();
  // let city = {
  //   name: "Berlin",
  //   population: 13000000,
  //   getName() {
  //     return this.name;
  //   },
  //   getPopulation() {
  //     return this.population;
  //   },
  //   setProp(key, value) {
  //     this[key] = value;
  //   },
  // };

  // console.log(city.getName());
  // console.log(city.getPopulation());

  // city.setProp("population", 1500000);
  // console.log(city.getPopulation());
function sayHi() {
  console.log(`Привет, я ${this.name}`);
}
let user = {
  name: "Ivan",
};
let admin = {
  name: "Sergey",
};
sayHi.call(user);
sayHi.apply(admin, [`Hello`]);
const userSayHi = sayHi.bind(user, "Привет");
userSayHi();
