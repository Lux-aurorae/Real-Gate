//1. 랜덤번호 지정
//2. 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//4. 랜덤번호가 < 유저번호 Down!!!
//5. 랜덤번호가 > 유저번호 Up!!
//6. Reset 버튼을 누르면 게임이 리셋된다.
//7. 5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측불가, 버튼이 disable)
//8. 유저가 1~100 범위 밖에 숫자를 입력하며 알려준다. 기회를 깎지 않는다.
//9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    if (userValue < computerNum) {
        resultArea.textContent = "up!!!";
    } else if (userValue > computerNum) {
        resultArea.textContent = "down!!!";
    } else {
        resultArea.textContent = "맞췄습니다!";
    }
}
function reset(){
    // user input 창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();
}
    pickRandomNum();

// pickRandomNum() 함수가 호출되는 위치를 확인하고, 중괄호가 올바르게 닫혔는지 확인을 못하여 답(console.log 값) 안나옴.
// 추가해서 넣을예정 (7.7 새벽 1:30)
// 철자 대소문자도 철저히 확인하기 '//'요거 의미 찾기 (숨기게 하는 기능 인 것 같음)