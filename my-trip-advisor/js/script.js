//헤더 개선
$(function() {
    $(window).scroll(function() {
        var top = $(window).scrollTop();

        if(top > 0)
            $('#header').addClass('inverted');
        else
            $('#header').removeClass('inverted');
    });
    $(window).trigger('scroll');

    //Datapicker 사용 -> 오늘 날짜로 표시
    var dpFrom = $('#from').datepicker({
        dateFormat: 'yy-mm-dd', //연도-월-일로 표시
        //입력 가능한 날짜 제한
        minDate: 0,
        //시작날짜가 바뀔 경우 종료 날짜의 minDate를 바꿈, 시작날짜 이전으로 종료날짜 변경 안 됨
        onSelect: function() {
               dpTo.datepicker('option', 'minDate', dpFrom.datepicker('getDate'));
        }
    });
    dpFrom.datepicker('setDate', new Date());


    //종료날짜
    var dpTo = $('#to').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0

    });
    dpTo.datepicker('setDate', 4)

    //검색 폼을 제출할 경우 검색함수 호출(button에 submit 존재)
    $('#form-search').submit(function(e) {
        e.preventDefault();

        var from = $('#from').val();
        var to = $('#to').val();

        search(from, to);
    });
});

//검색 기능
function search(from, to) {
    var url = 'https://javascript-basic.appspot.com/searchLocation';

    $.getJSON(url, {
        from: from,
        to: to
    }, function(r) {
        //목록함수 추가
         var $list = $('#list-panel');

            for (var i = 0; i < r.length; i++) {
              var data = r[i];

              var $item = createListItem(data);

              $list.append($item);
            }

            $('#list-bg').show();
          });
}

//Ajax의 목록함수
function createListItem(data) {
  var $tmpl = $('#list-item-template').clone().removeAttr('id');

  $tmpl.find('.list-item-image').attr('src', data.titleImageUrl);
  $tmpl.find('.list-item-name').html(data.name);
  $tmpl.find('.list-item-city-name').html(data.cityName);

  $tmpl.click(function(e) {
    var url = 'detail.html?id=' + data.id;

    window.location = url;
  });

  return $tmpl;
}
