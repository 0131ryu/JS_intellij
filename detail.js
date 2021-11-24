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