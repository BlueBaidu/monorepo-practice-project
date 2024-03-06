import { init } from "../../index.js";
init();

// example1 把一个方法绑定到一个对象上
function greet() {
  console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间");
}
const obj = {
  animal: "猫",
  sleepDuration: "12 到 16 小时",
};
greet.myCall(obj); // 猫 的睡眠时间一般在 12 到 16 小时 之间

// example2
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food() {
  Product.myCall(this, "JS教程", 0.01);
  this.category = "书";
}
console.log(new Food().name); // JS教程
