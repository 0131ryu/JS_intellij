var API_URL = "https://floating-harbor-78336.herokuapp.com/fastfood";

$(function() {
    $('.btn-search').click(function() {

        //사용자가 입력한 키워드로 검색하기
        var searchKeyword = $('#txt-search').val();

        search(searchKeyword);
        });

           //검색 시 엔터키가 입력되었는지 여부
            $('#txt-search').on('keypress', function(e) {
                if(e.keyCode === 13) {
                //console.log('엔터키가 입력되었습니다.');
                $('.btn-search').trigger('click'); //trigger :특정 엘리먼트를 강제로 이벤트 발생
                }
            });
        });

        function search(searchKeyword) {
        $.get(API_URL, {

            //사용자가 입력한 키워드로 검색하기
            searchKeyword: searchKeyword
            }, function(data) {
            //개수 출력하기
            var list = data.list;
            var total = data.total;

            $('.total').html("총 " + total + '개의 패스트푸드점을 찾았습니다.');

            //목록 출력하기
            var $list = $('.list');

            for(var i=0; i<list.length; i++) {
                var item = list[i];
                //각 아이템 하나하나마다 DOM 객체를 만들어 $list에 추가함

                //1. 템플릿을 복제한다
                //2. 복제한 템플릿에 데이터를 세팅한다
                //3. 목록에 복제한 템프릿을 추가한다.
                var $elem = $('#item-template')
                    .clone()
                    .removeAttr('id'); //id 삭제함 -> 같은 id를 가진 엘리먼트로 리턴하는 것을를 방지

                $elem.find('.item-no').html(i + 1);
                $elem.find('.item-name').html(item.name);
                $elem.find('.item-addr').html(item.addr);

                $list.append($elem);
            }

        });
    };
