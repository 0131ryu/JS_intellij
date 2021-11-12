/*
1. 사용자와 컴퓨터는 동시에 패를 낸다(가위, 바위, 보 중 하나)
2. 컴퓨터는 매번 랜덤한 패를 낸다
3. 서로의 패를 비교해서 승자를 정한다
4. 결과를 알려준다
*/

//가위, 바위, 보는 계속 반복 -> 상수로 치환(값이 변하지 않음)
var SCISSORS = "가위";
var ROCK = "바위";
var PAPER = "보";


//공통 부분
function onButtonClick(userInput) {

    var comInput;
    var rnd = Math.random();

    if(rnd< 0.33) {
    comInput = SCISSORS;
    } else if(rnd < 0.66) {
    comInput = ROCK;
    } else {//보일경우
    comInput = PAPER;
    }
    //console.log('사용자의 패: ', userInput)
    //출력화면 리팩토링
    var result = '컴퓨터 : ' + comInput;

    if(userInput === SCISSORS) {
            if(comInput === SCISSORS) { //비긴경우
                result += '▶▶ 비겼습니다.'
            } else if(comInput === ROCK) { //진 경우
                result += '▶▶ 졌습니다.'
            } else { //이긴 경우
                result += '▶▶ 이겼습니다.'
            }
        } else if(userInput === ROCK) {
              if(comInput === ROCK) {
                result += '▶▶ 비겼습니다.'
              } else if(comInput === PAPER) {
                  //사용자가 진 경우
                  result += '▶▶ 졌습니다.'
              } else {
                  result += '▶▶ 이겼습니다.'
               }
          } else {
              if(comInput === PAPER) {
                  result += '▶▶ 비겼습니다.'
              } else if(comInput === SCISSORS) {
                  result += '▶▶ 졌습니다.'
              } else {
                  result += '▶▶ 이겼습니다.'
               }
          }
          alert(result);
        }

/*
//가위 버튼 클릭 핸들러
function onScissorClick() {
    var comInput;
    var rnd = Math.random();

    if(rnd< 0.33) {
    comInput = SCISSORS;
    } else if(rnd < 0.66) {
    comInput = ROCK;
    } else {//보일경우
    comInput = PAPER;
    }

    if(comInput === SCISSORS) { //비긴경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터와 비겼습니다.");
    } else if(comInput === ROCK) { //진 경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터에게 졌습니다.");
    } else { //이긴 경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터에게 이겼습니다.");
    }
}

//바위 버튼 클릭 핸들러
function onRockClick() {
    var comInput;
    var rnd = Math.random();

    if(rnd< 0.33) {
    comInput = SCISSORS;
    } else if(rnd < 0.66) {
    comInput = ROCK;
    } else {//보일경우
    comInput = PAPER;
    }

    if(comInput === ROCK) { //비긴경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터와 비겼습니다.");
    } else if(comInput === PAPER) { //진 경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터에게 졌습니다.");
    } else { //이긴 경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터에게 이겼습니다.");
    }
}

//보 버튼 클릭 핸들러
function onPaperClick() {
    var comInput;
    var rnd = Math.random();

    if(rnd< 0.33) {
    comInput = SCISSORS;
    } else if(rnd < 0.66) {
    comInput = ROCK;
    } else {//보일경우
    comInput = PAPER;
    }

    if(comInput === PAPER) { //비긴경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터와 비겼습니다.");
    } else if(comInput === SCISSORS) { //진 경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터에게 졌습니다.");
    } else { //이긴 경우
        alert("컴퓨터 : " + comInput + " → 컴퓨터에게 이겼습니다.");
    }
}
*/