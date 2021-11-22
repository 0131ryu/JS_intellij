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
});