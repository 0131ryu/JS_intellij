/*
1. 숫자 6개를 하나씩 넣을 6개의 변수 준비
2. 1 ~ 45 값을 랜덤값으로 생성
3. 기존에 선택한 숫자와 같다면 다시 2로 이동
4. 다르다면 변수1에 값을 넣음
5. 2~4 과정을 반복해 변수 2, 3, 4,5 ,6에 할당
*/

var list = [];
var result = [];
for(var i =1; i<=45; i++) {
    list.push(i)
}

for(var i=0; i<6; i++) {
    var index = Math.floor(Math.random() * list.length);

    //랜덤으로 선택한 인덱스의 값
    var num = list[index];

    //배열에서 특정 요소 제거 -> 랜덤한 값 하나 제거
    list.splice(index, 1);

    result.push(num);

}

//비교함수 : 두 개의 값을 받아서 어떠한 기준에 따라 비교 시 배열 정렬
function compare(a, b) {
    //간단한 버전
    return a - b; //오름차순, 내림차순은 b - a;

    /* 긴 버전
    if(a < b) { //a의 값이 b의 값보다 작다면
    return -1; //0보다 작은 숫자
    }
    if(a > b) {//a의 값이 b의 값보다 크다면
    return 1;//0보다 큰 숫자
    }
    return 0; //a의 값은 b의 값과 동일
    */

}

//배열 정렬 :유니코드 기반
result.sort(compare);

for(var i=0; i<6; i++) {
    document.write('<span class="ball">' + result[i] + '</span>');
}




