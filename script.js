//1. 랜덤번호 지정
//2. 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//4. 랜덤번호가 < 유저번호 Down!!!
//5. 랜덤번호가 > 유저번호 Up!!
//6. Reset 버튼을 누르면 게임이 리셋된다.
//7. 5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측불가, 버트닝 disable)
//8. 유저가 1~100 범위 밖에 숫자를 입력하며 알려준다. 기회를 깎지 않는다.
//9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.

let computerNum = 0;

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

    pickRandomNum();
