"use strict";

function foodReport(name, age) {
  console.log(name + ", " + age);
  for (var _len = arguments.length, favoriteFoods = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    favoriteFoods[_key - 2] = arguments[_key];
  }
  console.log(favoriteFoods);
}
foodReport("이몽룡", 20, "짜장면", "짬뽕", "탕수육");
foodReport("홍길동", 16, "김밥");