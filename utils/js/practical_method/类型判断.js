// 检测所有的数据类型，注意不是数值
function typeOf(obj) {
  const res = Object.prototype.toString.call(obj).slice(8, -1);
  console.log(res);
  return res;
}

typeOf(new Date());
typeOf(null);
