// promise 이용하여 비동기 작업 순차적 실행 가능 : promise chain 생성
// promise > resolve > 1then > 리턴값 -> 2then > 리턴값 -> 3then
// 이전 단계의 처리 결과가 다음 단계로 전달되어 이용 가능
// 예외 처리 : catch() 이용 

var p = new Promise((resolve, reject) => {
    resolve("first!")
})

p.then((msg) => {
    console.log(msg);
    throw new Error("##에러")
    return "second";
})
.then((msg) => { // return값이 인자가 됨
    console.log(msg);
    return "third";
})
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.log("오류 발생 ==> " + error)
})