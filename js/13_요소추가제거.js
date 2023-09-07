document.getElementById("add").addEventListener("click", function(){

    // div 요소 생성
    const div = document.createElement("div");

    // div에 row클래스 추가
    div.classList.add("row");

    // <div class="row"></div>

//-------------------------------------------------

    // input 요소 생성
    const input = document.createElement("input");

    input.classList.add("in");

    // <input class="in">

//-------------------------------------------------

    // span 요소 생성
    const span = document.createElement("span");

    span.classList.add("remove");

    span.innerText = "X";

    // <span class="remove"></span>

    div.append(input);
    div.append(span);
    //<div class="row">
    //      <input class="in">
    //      <span class="remove"></span>
    //</div>

    document.getElementById("container").append(div);


    span.addEventListener("click", function() {
        span.parentElement.remove();
    });

});