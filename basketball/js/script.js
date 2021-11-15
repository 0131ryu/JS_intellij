/*
1. 컴퓨터 차례로 시작한다
2. 사용자가 컴퓨터 슛 버튼을 클릭한다
3. 컴퓨터는 2점슛을 쏠지, 3점슛을 쏠지 랜덤하게 결정한다
4. 슛이 성공하면 컴퓨터의 점수를 올려준다
5. 사용자의 차례로 바꿔준다
6. 사용자가 2점슛 혹은 3점슛 버튼을 클릭한다
7. 슛이 성공하면 사용자의 점수를 올려준다
8. 컴퓨터의 차례로 바꿔주고 남은 슛 횟수를 1만큼 줄여준다
9. 남은 슛 횟수가 0이 될 때까지 1~8항목을 반복한다
10. 양쪽의 점수를 비교해 승자를 정한다.
*/
var textElem = document.getElementById('text');

var shootType = Math.random() < 0.5 ? 2 : 3;

    if(shootType === 2) {
        if(Math.random() < 0.5) {
        textElem.innerHTML = "컴퓨터가 2점슛을 성공했습니다."
        } else {
        textElem.innerHTML = "컴퓨터가 2점슛을 실패했습니다."
        }
    } else {
        if(Math.random() < 0.33) {
        textElem.innerHTML = "컴퓨터가 3점슛을 성공했습니다."
        } else {
        textElem.innerHTML = "컴퓨터가 2점슛을 실패했습니다."
        }
    }

function onComputerShoot() {

}