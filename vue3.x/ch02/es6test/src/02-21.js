const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        var num = Math.random(); // 0~1사이 난수 발생
        if(num >= 0.8) {
            reject("생성된 숫자가 0.8 이상임 - " + num);
        }
        resolve(num);
    }, 2000) // 2초 후에 실행
})

p.then((result) => {
    console.log("처리 결과 : ", result)
})
.catch((error) => {
    console.log("오류 : ", error)
})

console.log("## Promise 객체 생성!");

// 순서 : promise 생성 > reject함수 호출 > console 출력 > num값에 따라서 resolve : .then/ reject : .catch 실행