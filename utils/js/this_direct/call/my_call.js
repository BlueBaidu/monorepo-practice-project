// 手写实现call方法
// 1.所有的函数都可以使用myCall方法，所以加到Function的原型上，所有的函数都是Function的实例
// 2.为了避免在原型上添加重复的键，使用Symbol来生成唯一的键
// 3.绑定函数，执行函数，返回结果
export const myCall = function (thisArg, ...args) {
  // Function.prototype.myCall = function (thisArg, ...args) {
  const key = Symbol("key");
  thisArg[key] = this; // this指向调用者，例如greet.myCall(),this指向greet()
  const res = thisArg[key](...args); //thisArg表示目标对象，greet.myCall(obj)，thisArg表示obj
  // 执行之后等于obj[key] = greet(...args)
  delete thisArg[key];
  return res;
};
