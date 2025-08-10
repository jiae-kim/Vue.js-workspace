"use strict";

var add = function add(x, y) {
  this.result = x + y;
};
var obj = {};
add = add.bind(obj);
add(3, 4);
console.log(obj);