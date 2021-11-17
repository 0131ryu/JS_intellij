/*
1. 컴퓨터 차례로 시작한다
2. 사용자가 컴퓨터 슛 버튼을 클릭한다
3. 컴퓨터는 2점슛을 쏠지, 3점슛을 쏠지 랜덤하게 결정한다
4. 슛이 성공하면 컴퓨터의 점수를 올려준다
5. 사용자의 차례로 바꿔준다
6. 사용자가 2점슛 혹은 3점슛 버튼을 클릭한다
7. 슛이 성공하면 사용자의 점수를 올려준다
8. 컴퓨터의 차례로 바꿔주고 남은 슛 횟수를 1만큼 줄여준다(컴퓨터 -> 사용자가 끝난 뒤 1이 줄어듦)
9. 남은 슛 횟수가 0이 될 때까지 1~8항목을 반복한다
10. 양쪽의 점수를 비교해 승자를 정한다.

추가사항
1-1. 컴퓨터의 기본 슛 확률은 다음과 같다 2점슛(50%), 3점슛(33%)
1-2. 사용자에게 6점 이상 지고 있을 경우, 슛 확률을 각각 60%, 38%로 올린다
1-3. 사용자에게 10점 이상 지고 있을 경우, 슛 확률이 각각 70%, 43%로 올린다
1-4. 반대로 사용자에게 6점 이상 이기고 있을 경우, 슛 확률이 각각 40%, 28%로 내린다
1-5. 사용자게에 10점 이상 이기고 있을 경우, 슛 확률이 각각 30%, 23%로 내린다
*/

//리팩토링 -> 안내문구 함수로 만들기
function showText (s) {
    //jquery 적용
    //var textElem = document.getElementById('text');
    //textElem.innerHTML = s;
    var $textElem = $('#text');
    $textElem.html(s);
}

var computer = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
};

var user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
}

var game = {
    isComputerTurn: true,
    shotsLeft: 15
}
 //컴퓨터 점수판 갱신하기(#text) -> 전역변수로 옮길 것
 var comScore = 0;
 //컴퓨터 확률 추가 -> 오브젝트로 연관된 변수 정리
 var comPercent2 = 0.55;
 var comPercent3 = 0.33;
 //사용자 점수판
 var userScore = 0;
 //사용자 확률 추가
  var userPercent2 = 0.55;
  var userPercent3 = 0.33;
 //게임 규칙 구현하기
 var isComputerTurn = true;
 //남은 슛 횟수
 var shootLeft = 15;

//리팩토링2 -> 컴퓨터 점수 갱신
function updateComputerScore(score) {
    //comScore += score;
    computer.score += score;
    //jquery 적용
    //var comScoreElem = document.getElementById('computer-score');
    //comScoreElem.innerHTML = comScore;
    var $comScoreElem =  $('#computer-score');
    $comScoreElem.animateNumber({
        number: computer.score
    })
    //$comScoreElem.html(computer.score);
}

//리팩토링3 -> 사용자 점수 갱신
function updateUserScore(score) {
    //userScore += score;
    user.score += score;
    //jquery 적용
    //var userScoreElem = document.getElementById('user-score');
    //userScoreElem.innerHTML = userScore;
    var $userScoreElem = $('#user-score');
    //$userScoreElem.html(user.score);
    $userScoreElem.animateNumber({
            number: user.score
        })
}

//리팩토링4 -> 버튼의 비활성화 지정
function disabledComputerButtons(flag) {
    /*
    var computerButtons = document.getElementsByClassName('btn-computer');

    for(var i=0; i<computerButtons.length; i++) {
                computerButtons[i].disabled = flag;
            }*/
    $('.btn-computer').prop('disabled', flag);
}

function disabledUserButtons(flag) {
    /*
    var userButtons = document.getElementsByClassName('btn-user');

            for(var i=0; i<userButtons.length; i++) {
                userButtons[i].disabled = flag;
            }*/
    $('.btn-user').prop('disabled', flag);
}

//상황에 따라 확률 조작
function updateAI() {
    var diff = userScore - comScore;

    if(diff >= 10) {
        comPercent2 = 0.7;
        comPercent3 = 0.43;
    } else if(diff >= 6) {
        comPercent2 = 0.6;
        comPercent3 = 0.38;
    } else if (diff <= -10) {
        comPercent2 = 0.3;
        comPercent3 = 0.23;
    } else if (diff <= -6) {
        comPercent2 = 0.4;
        comPercent3 = 0.28;
    }
}

function onComputerShoot() {
    if(!isComputerTurn)
        return;

    updateAI();

    var shootType = Math.random() < 0.5 ? 2 : 3;

//    if(shootType === 2) { -> 아래 computer["percent2" + shootType] 대체
        if(Math.random() < computer["percent" + shootType]) { //percent + shootType에 따라 percent2, percent3이 결정됨
                showText('컴퓨터가 ' + shootType + '점슛을 성공했습니다.');
                updateComputerScore(shootType);
                //updateComputerScore(2);
//            comScore += 2;
//            comScoreElem.innerHTML = comScore;

        } else {
            showText('컴퓨터가 ' + shootType + '점슛을 실패했습니다.');
        }
     /*else {
        if(Math.random() < computer.percent3) {
            showText('컴퓨터가 3점슛을 성공했습니다.');
            updateComputerScore(3);

        } else {
            showText('컴퓨터가 3점슛을 실패했습니다.');
        }
    }*/
    isComputerTurn = false;
    disabledComputerButtons(true);
    disabledUserButtons(false);

    //컴퓨터 순서일 경우 버튼 활성화->비활성화, 유저 버튼도 동일(비활성화 -> 활성화)
    /*
        var computerButtons = document.getElementsByClassName('btn-computer');

        for(var i=0; i<computerButtons.length; i++) {
            computerButtons[i].disabled = true;
        }

        var userButtons = document.getElementsByClassName('btn-user');

        for(var i=0; i<userButtons.length; i++) {
            userButtons[i].disabled = false;
        }
    */
}

function onUserShoot(shootType) { //()안에 shootType 넣어야 함 -> 인자를 다르게 넣으므로

    if(isComputerTurn)
        return;

//    var textElem = document.getElementById('text');
//    var userScoreElem = document.getElementById('user-score');

    //var shootType = Math.random() < 0.5 ? 2 : 3; //있을 경우 오류 발생, 이미 함수 근처에 존재
//
//    if(shootType === 2) {
        if(Math.random() < user['percent' + shootType]) {
           showText('사용자가 ' + shootType + '점슛을 성공했습니다.');
           updateUserScore(shootType);
//            userScore += 2;
//            userScoreElem.innerHTML = userScore;

        } else {
            showText('사용자가 ' + shootType + '점슛을 실패했습니다.');
        }

    isComputerTurn = true;
    disabledComputerButtons(false);
    disabledUserButtons(true);

    //컴퓨터 순서일 경우 버튼 활성화->비활성화, 유저 버튼도 동일(비활성화 -> 활성화)
    /*
        var computerButtons = document.getElementsByClassName('btn-computer');

        for(var i=0; i<computerButtons.length; i++) {
            computerButtons[i].disabled = false;
        }

        var userButtons = document.getElementsByClassName('btn-user');

        for(var i=0; i<userButtons.length; i++) {
            userButtons[i].disabled = true;
        }
    */

    //남은 슛횟수
    game.shotsLeft--;

    //var shootLeftElem = document.getElementById('shots-left');
    // shootLeftElem.innerHTML = shootLeft;
    //jQuery 적용
    var $shotsLeftElem = $('#shots-left');
    $shotsLeftElem.html(game.shotsLeft);

    if(shootLeft === 0) {
        if(userScore > comScore) {
            showText("유저가 이겼습니다.");
        } else if (userScore < comScore) {
            showText("컴퓨터가 이겼습니다.");
        } else {
            showText("비겼습니다.");
        }

    //슛횟수가 끝나면 버튼 비활성화
    disabledComputerButtons(true);
    disabledUserButtons(true);
    /*
    for(var i=0; i<computerButtons.length; i++) {
            computerButtons[i].disabled = true;
        }

    for(var i=0; i<userButtons.length; i++) {
                userButtons[i].disabled = true;
        }*/

    }

}

$(function() {
        showText(3);
        //일정 시간 이후에 실행
        setTimeout(function() {
            showText(2);
            setTimeout(function() {
                showText(1);
                setTimeout(function() {
                    showText('컴퓨터부터 시작합니다.');
                    disabledComputerButtons(false);
                }, 1000)
            }, 1000)
        }, 1000);
    });