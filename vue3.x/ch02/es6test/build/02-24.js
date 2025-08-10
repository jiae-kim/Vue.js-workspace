"use strict";

var obj = {
  name: "홍길동",
  age: 20
};
var proxy = new Proxy(obj, {
  get: function get(target, key) {
    console.log("## get : " + key);
    if (!target[key]) throw new Error('존재하지 않는 속성(${key})입니다');
    return target[key]; // 속성접근
  },
  set: function set(target, key, value) {
    console.log("## set : ", key);
    if (!target[key]) throw new Error('존재하지 않는 속성(${key})입니다');
    target[key] = value;
  }
});
console.log(proxy.name); // 읽기 작업 get
proxy.name = "이몽룡"; // 쓰기 작업 set
proxy.age = 30; // 쓰기 작업 set

// 배열도 가능, key가 indx값