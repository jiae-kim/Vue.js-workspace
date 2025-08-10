"use strict";

var obj = {
  result: 0
};
obj.add = function (x, y) {
  this.result = x + y; // this => obj
};
obj.add(3, 4);
console.log(obj);