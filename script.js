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
let chances = 3;
// 기회는 3번으로 제한 (과제제출시)
let gameOver = false;
let chanceArea = document.getElementById("chance-area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;

    chances -- ;
    chanceArea.textContent = `남은 찬스: ${chances}번`;
    // 숫자 변수값만 넣고 싶을 때, '남은 찬스: chances 만 넣으면 안된다.
    // 정적인 값과 동적인 값을 같이 넣어주고 싶다면 중요! 약간 다른 문법을 사용해야해야한다.
    //  "" 의 값은 정적인 값에 ''(백틱) 의 값은 동적인 값에 사용한다.
    // 
    console.log("chances", chances);
    // chances = chances - 1; // chances -= 1; // chances--; 동일한 의미

    if (userValue < computerNum) {
        resultArea.textContent = "up!!!";
    } else if (userValue > computerNum) {
        resultArea.textContent = "down!!!";
    } else {
        resultArea.textContent = "맞췄습니다!";
    }

    if (chances < 1){
        gameOver = true;
    }
    // 긁적긁적 빛나 강사님도 실수한 부분! 왜 실수 했을까? 
    // let 변수를 선언하고 chances 라는 고유 ID 값에 = 3 3번 기회로 설정하였고,
    // 3번 설정 값에 1 밑으로 떨어지면( < 1) 버튼이 정지되어야 하는데 < 3 이라고 하면 3 이하부터는 작동하지 않는 문제가 발생함

if (gameOver == true) {
    playButton.disabled = true;
}
}

function reset(){
    // user input 창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();

    resultArea.textContent = "결과값이 나옵니다";
}
    pickRandomNum();

// pickRandomNum() 함수가 호출되는 위치를 확인하고, 중괄호가 올바르게 닫혔는지 확인을 못하여 답(console.log 값) 안나옴.
// 추가해서 넣을예정 (7.7 새벽 1:30)
// 철자 대소문자도 철저히 확인하기 '//'요거 의미 찾기 (숨기게 하는 기능 인 것 같음)