// 기존 객체의 속성, 배열의 요소들을 포함하여 새로운 객체, 배열을 생성하고자 할때 사용
// 원본 <-> 사본의 개념

let obj1 = {name:"박문수", age:29};
let obj2 = obj1; // shallow copy, 동일한 객체 참조
let obj3 = {...obj1}; // 객체 내부의 값(속성값)은 복사하지만 obj3와 obj1은 다른 객체, 주소가 다름
let obj4 = {...obj1, email:"mspark@gmail.com"}; // 새로운 속성 추기

obj2.age = 19;
console.log(obj1);
console.log(obj2);
console.log(obj3); // age:29
console.log(obj1 == obj2); // true
console.log(obj1 == obj3); // false

let arr1 = [100, 200, 300];
let arr2 = ["hello", ...arr1, "world"];
console.log(arr1);
console.log(arr2);