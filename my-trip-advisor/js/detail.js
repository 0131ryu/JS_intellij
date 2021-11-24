//detail.html에 필요한 함수




$(function() {
     var id = parseId(window.location.search);
     //console.log('id', id);
    getDetail(id);

    showMap();
});

//여행지 클릭 시 상세보기로 이동
function parseId(str) {
    var s = str.substring(1);
    var args = s.split('&');

    for(var i = 0; i< args.length; i++) {
        var arg = args[i];
        var tokens = arg.split('=');

        if(tokens[0] === 'id')
            return tokens[1];
    }
    return null;
}


//데이터 가져오기
function getDetail(id) {
    var url = 'https://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url, {
        id: id
      }, function(r) {

        //console.log(r[0].name);

        //데이터가 정리 안 됨, 0번째는 가능
//        for(var i=0; i<21; i++) {
//        if(r[i].id = i) {
//        $('.detail-header-name').html(r[i].name);
//        $('.detail-header-city-name').html(r[i].cityName);
//        $('.detail-desc-text').html(r[i].desc);
//            }
//        }
        $('.detail-header-name').html(r[0].name);
        $('.detail-header-city-name').html(r[0].cityName);
        $('.detail-desc-text').html(r[0].desc);

       var $gallery = $('#detail-images');
          var images = r[0].subImageList;

          for (var i = 0; i < images.length; i++) {
            var $image = $('<img src="' + images[i] + '" />');
            $gallery.append($image);
      }

      Galleria.loadTheme('libs/galleria/themes/classic/galleria.classic.js');
      Galleria.run('#detail-images');

      showMarker(r[0].position.x, r[0].position.y);

      //여행지 등록하기 버튼을 누르면 쿠키 추가
        //원래 쿠키는 문자열만 저장 -> 배열이나 오브젝트 저장 불가 -> JSON 사용(JSON.stringify)
       $('.btn-register').click(function() {
       /*
       getJSON 사용 불가
       Removed built-in JSON support, i.e. getJSON() and automatic stringifying in set(): use Cookies.set('foo', JSON.stringify({ ... })) and JSON.parse(Cookies.get('foo')) instead.
       */
             var myTrips = Cookies.set('MYTRIPS', JSON.stringify({myTrips}));

             // 존재하지 않을 경우 빈 배열로 초기화
             if (!myTrips)
               myTrips = [];

             // 여행지를 myTrips에 추가
             myTrips.push({
               id: id,
               name: r.name,
               cityName: r.cityName,
               x: r.position.x,
               y: r.position.y
             });

             Cookies.set('MYTRIPS', myTrips);

             alert('여행지가 등록되었습니다!');
      });
    });
};

//지도 api
function showMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 33.3617,
            lng: 126.5292
        }
    });
}

//지도에 마커 추가
function showMarker(lat, lng) {
//마커로 지도 이동
    var pos = {
        lat: lat,
        lng: lng
    };

    new google.maps.Marker({
        position:pos,
        map: map
    });
    map.panTo(pos);
}