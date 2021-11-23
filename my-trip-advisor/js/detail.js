//detail.html에 필요한 함수

$(function() {
    //detail.html
    var id = parseId(window.location.search);
    //console.log('id', id);
    getDetail(id);
})

//여행지 클릭 시 상세보기로 이동
function parseId(str) {
    var s = str.substring(1);
    var args = s.split('&');

    for(var i=0; i<args.length; i++) {
        var arg = args[i];
        var tokens = arg.split('=');

        if(tokens[0] === 'id') {
            return tokens[1];
        }
    return null;
    }
}

//데이터 가져오기
function getDetail(id) {
    var url = 'https://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url, {
        id: id
      }, function(r) {
      console.log(r);
        $('.detail-header-name').html(r.name);
        $('.detail-header-city-name').html(r.cityName);
        $('.detail-desc-text').html(r.desc);
    });
};