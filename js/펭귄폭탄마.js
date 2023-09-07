const penguin = document.getElementById('penguin');
const village = document.getElementById('village');
const villageWidth = village.clientWidth;
const villageHeight = village.clientHeight;
const penguinWidth = penguin.clientWidth;
const penguinHeight = penguin.clientHeight;
let penguinX = (villageWidth - penguinWidth) / 2;
let penguinY = (villageHeight - penguinHeight) / 2;

let isBoom = false; // 추가: 폭탄 상태를 나타내는 변수
let boomImage = document.createElement('img'); // 추가: 폭탄 이미지 요소 생성
boomImage.src = 'boom.png'; // 추가: 초기 폭탄 이미지 설정
boomImage.style.position = 'absolute';
boomImage.style.display = 'none'; // 추가: 초기에는 숨김 상태
village.appendChild(boomImage); // 추가: 폭탄 이미지를 게임 화면에 추가

function movePenguin(event) {
    const key = event.key;
    const step = 10;

    if (!isBoom) { // 폭탄 상태가 아닐 때만 펭귄을 이동시킴
        if (key === 'ArrowLeft' && penguinX - step >= 0) {
            penguinX -= step;
        } else if (key === 'ArrowRight' && penguinX + penguinWidth + step <= villageWidth) {
            penguinX += step;
        } else if (key === 'ArrowUp' && penguinY - step >= 0) {
            penguinY -= step;
        } else if (key === 'ArrowDown' && penguinY + penguinHeight + step <= villageHeight) {
            penguinY += step;
        }
    }

    penguin.style.left = penguinX + 'px';
    penguin.style.top = penguinY + 'px';
}

// "x" 키를 누르면 폭탄 이미지를 생성하고 2초 후에 "boom2.png"로 변경
document.addEventListener('keydown', (event) => {
    if (event.key === 'x' && !isBoom) {
        isBoom = true;
        boomImage.style.left = penguinX + 'px';
        boomImage.style.top = penguinY + 'px';
        boomImage.style.display = 'block';
        setTimeout(() => {
            boomImage.src = 'boom2.png'; // 2초 후에 이미지 변경
            setTimeout(() => {
                isBoom = false;
                boomImage.style.display = 'none';
            }, 2000); // 추가: 2초 뒤에 폭탄 이미지 숨김
        }, 2000);
    }
});

document.addEventListener('keydown', movePenguin);