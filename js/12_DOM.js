// Node 확인하기

document.getElementById("btn1").addEventListener("click", function(){

    // #test의 자식 노드를 모두 얻어오기
    // - 요소.childNodes : 요소의 자식 노드를 모두 반환
    const nodeList = document.getElementById("test").childNodes;
    console.log(nodeList);

    // 노드 탐색
    // 1) 부모 노드 탐색 : parentNode
    const li1 = document.getElementById("li1");
    console.log( li1.parentNode ); // ul#test

    // 부모 노드 마지막에 새로운 노드 추가 (append : (마지막에) 덧붙이다)
    li1.parentNode.append("abcd");

    // 2) 첫 번째 자식 노드 탐색 : firstChild
    console.log( document.getElementById("test").firstChild ); // text

    // 3) 마지막 자식 노드 탐색 : lastChild
    console.log( document.getElementById("test").lastChild ); // 추가된 abcd

    // 4) 중간에 존재하는 자식 노드 탐색 : 부모요소.childNodes[인덱스]
    console.log(nodeList[11]);

    // 5) 이전 형제 노드 탐색 : previousSibling
    //    다음 형제 노드 탐색 : nextSibling

    console.log(nodeList[8].previousSibling);
    console.log(nodeList[8].nextSibling);

    // 연달아서 사용 가능
    console.log(nodeList[8].previousSibling.previousSibling.previousSibling);

});

// Element 확인하기

document.getElementById("btn2").addEventListener("click", function() {
    
    // #test의 모든 자식 요소를 반환
    const list = document.getElementById("test").children;
    console.log(list);

    // #test의 첫번째 자식 요소
    document.getElementById("test").firstElementChild.style.backgroundColor = "red";

    // #test의 자식 중 2번 인덱스의 이전 형제 요소 배경색 yellowgreen으로 변경
    list[2].previousElementSibling.style.backgroundColor = "yellowgreen";
});

document.getElementById("btn3").addEventListener("click", function() {

    const div = document.getElementById("div3"); // div3 선택
    
    // document.createElement("태그명") : 해당 태그 요소를 생성하여 반환
    const child = document.createElement("div"); // div 생성 O, 화면 배치 X

    div.append(child);




    
});


