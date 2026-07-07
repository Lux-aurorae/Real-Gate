// ---------- 요소 가져오기 ----------
let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let answerArea = document.getElementById("answer-area");   // ★ 추가 1: 정답 자리 붙잡기
let chances = 3;
let gameOver = false;
let history = [];

// ---------- 이벤트 연결 ----------
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () { userInput.value = ""; });

// ---------- 랜덤 번호 뽑기 ----------
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
  answerArea.textContent = `정답은 ${computerNum} 입니다`;   // ★ 추가 2: 화면에 정답 표시 (백틱 주의!)
}

// ---------- GO 버튼 ----------
function play() {
  let userValue = Number(userInput.value);

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자를 입력해주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 찬스:${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "up!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!!!";
  } else {
    resultArea.textContent = "맞췄습니다!";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1 && gameOver === false) {
    gameOver = true;
    resultArea.textContent = `게임 오버! 정답은 ${computerNum} 이었습니다`;
  }

  if (gameOver === true) {
    playButton.disabled = true;
  }
}

// ---------- Reset 버튼 ----------
function reset() {
  userInput.value = "";
  resultArea.textContent = "결과가 나온다";
  chances = 3;
  history = [];
  gameOver = false;
  playButton.disabled = false;
  chanceArea.textContent = `남은 찬스:${chances}번`;
  pickRandomNum();   // 새 정답을 뽑으면 ★추가2 덕분에 화면 표시도 자동 갱신
}

// ---------- 게임 시작 (파일 맨 아래) ----------
pickRandomNum();   // ★ 추가 3: 페이지 열리자마자 실행 → '처음부터' 정답이 보임
chanceArea.textContent = `남은 찬스:${chances}번`;