// 기본 함수
function clickCount(btn) { // 함수 선언
    btn.innerText = Number(btn.innerText) + 1; // 함수 정의
}

document.addEventListener("click", function(){
    // 익명함수
});


// 기본함수
function test1() {
    console.log("기본함수");
}

test1(); // 호출

// 즉시실행 함수

(function() {
    console.log("즉시 실행 함수")
})();


//----------------------------------------------------------

// 화살표 함수(Arrow Function)

// 1. 기본형태 : () => {}
document.getElementById("btn2-1").addEventListener("click", () => {
    alert("화살표 함수 기본 형태입니다");

});

// 2. 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2-2").addEventListener("click", e => {
    e.target.style.backgroundColor = "yellow";
});

// 3. {}, return 생략
document.getElementById("btn2-3").addEventListener("click", () => {

    // 익명함수
    printConsole(  function(num) {return num * 10}  )

    // 화살표함수
    printConsole( num => num * 5 );



});


function printConsole(fn) { // 매개변수로 함수가 전달됨
    console.log( fn(2) );
}

// this 사용 불가
// 1) 익명함수는 this 사용 가능
document.getElementById("btn2-4").addEventListener("click", function () {
    this.style.backgroundColor = "red";
})

// 2) 화살표함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click", (e) => {

    // 화살표 함수에서 this는 창 자체를 나타내는 객체(window)이다.
    console.log(this);

    e.target.style.color = "white";

})