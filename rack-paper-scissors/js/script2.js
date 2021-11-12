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


var userInput = prompt("가위, 바위, 보!");

//가위, 바위, 보 이외의 값을 입력 시 알림 설정
if(userInput !== SCISSORS && userInput !== ROCK && userInput !== PAPER) {
    alert("가위, 바위, 보 중 하나를 입력해야 합니다.");
} else {
var comInput;

//Math.random()은 0 ~ 1 사이의 임의의 값 리턴
var rnd = Math.random();

if(rnd < 0.33) { //0에서 0.33 사이의 값, 즉 1/3 확률
    comInput = SCISSORS;
} else if (rnd < 0.66) {
    comInput = ROCK;
} else {
    comInput = PAPER;
}
}

    //결과 출력하기

    switch(userInput) {
        case SCISSORS:
            switch(comInput) {
                case SCISSORS: //비길 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터와 비겼습니다.");
                    break;
                case ROCK: //진 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터에게 졌습니다.");
                    break;
                default://이긴 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터에게 이겼습니다.");
                    break;
            }
            break;
          case ROCK:
            switch(comInput) {
                case ROCK: //비길 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터와 비겼습니다.");
                    break;
                case PAPER: //진 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터에게 졌습니다.");
                    break;
                default://이긴 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터에게 이겼습니다.");
                    break;
            }
            break;
        default: //보
            switch(comInput) {
                case PAPER: //비길 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터와 비겼습니다.");
                    break;
                case SCISSORS: //진 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터에게 졌습니다.");
                    break;
                default://이긴 경우
                    alert("컴퓨터 : " + comInput + " → 컴퓨터에게 이겼습니다.");
                    break;
            }
            break;
    }



console.log("컴퓨터의 패 : ", comInput);