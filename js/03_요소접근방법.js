// id로 접근하기 
function accessId() {
    
    const div1 = document.getElementById("div1");

    // 접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;

    /**** 자바스크립트는 문자열 비교시에도 비교연산자(==) 사용한다 !****/
    if( bgColor == "red" ) {
        div1.style.backgroundColor = "yellow";
    }else {
        div1.style.backgroundColor = "red";
    }
}

// class로 접근하기 
function accessClass() {

    // 요소를 여러개 접근 하는 경우 [배열] 형태로 반환됨
    const arr = document.getElementsByClassName("div2");

    console.log(arr);

    // 인덱스를 이용해서 요소 하나씩 접근
    arr[0].style.backgroundColor = 'pink';
    arr[0].innerText = "첫번째 요소";

    arr[1].style.backgroundColor = 'tomato';
    arr[1].innerText = "두번째 요소";

    arr[2].style.backgroundColor = 'skyblue';
    arr[2].innerText = "세번째 요소";

}

function acessTagName() {

    const arr = document.getElementsByTagName("li");

    console.log(arr);

    for(let i = 0; i < arr.length; i++) {

        const num = arr[i].innerText;
        arr[i].style.backgroundColor = "rgb(130, 220, " + (50 * num) + ")";
    }

}


// name으로 접근하기 
function accessName() {

    const hobbyList = document.getElementsByName("hobby");

    let str = "";

    let count = 0;

    for(let i=0; i<hobbyList.length; i++) {

        // * radio, checkbox 전용 속성 *
        // .checked : 해당요소가 체크되어 있으면 true, 아니면 false 반환
        if( hobbyList[i].checked ){
            str += hobbyList[i].value + " ";

            count++; 
        }   
    }

    document.getElementById("name-div").innerText = str;

    document.getElementById("name-div").innerHTML += "<br><br>선택된 개수 : " + count;


}

function accessCss() {

    // querySelector() : 요소 1개 선택 시 사용
    //  여러 요소가 있다면 첫번째 요소만 선택

    document.querySelector("#css-div").style.border = "3px solid red";

    document.querySelector("#css-div > div").style.fontSize = "30px";

    // querySelectorAll() : 모든 요소 선택 시 사용
    const arr = document.querySelectorAll("#css-div > div");

    for(let i=0; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'gold';
    }
}

// 카카오톡 채팅 만들기

function readValue() {

    const bg = document.getElementById("chatting-bg");

    const input = document.querySelector("#chatting-input");

    // input에 입력된 값이 있는 경우
    if( input.value.trim().length > 0 ) {

        // 문자열.trim() : 문자열 양 끝에 공백을 모두 제거
        // ex)   "          K H       " => "K H"
        // ex) "       " => "" 
        
        // input에 입력된 값을 얻어와 bg 추가 (누적)

        bg.innerHTML += "<p><span>"+ input.value +"</span></p>";

        // 요소.scrollTop : 요소 내부 현재 스크롤 위치 반환
        // 요소.scrollHeight : 스크롤의 전체 높이
        // 요소.scrollTop = 요소.scrollHeight : 스크롤을 현재 스크롤 높이만큼
        // 위치를 이동

        bg.scrollTop = bg.scrollHeight;

        
    }else {
        alert("채팅 내용을 입력해주세요");
    }


    // 입력된 input의 value 지우기
    input.value = "";

    // 입력 후 다시 input에 포커스 맞추기
    input.focus();
}


// input 태그에 연결된 키가 눌러졌을 때 엔터인 경우를 검사하는 함수
function inputEnter() {
    console.log(window.event.key);

    if(window.event.key == "Enter") {
        readValue();
    }
}