//쿠키 추가

/*function addMenuCookie() {
    var storeData = [];
    var cookieName = $('#cookieName').val();
    var menuId = $('#menuID').val();
    var menuName = $('#menuName').val();
    var obj = {menuId: menuId, menuName: menuName};
    var cookie = $.cookie(cookieName);
    if(cookie) {
        storeData = JSON.parse(cookie);
    }
    storeData.push(obj);
    $.cookie(cookieName, JSON.stringify(storeData), {expires: 1, path: '/'});
}

//쿠키 가져오기

function getMenuCookie() {
    var result;
    var cookieName = $('#cookieName').val();
    var cookie = $.cookie(cookieName);
    if(cookie) {
        result = JSON.parse(cookie);
    }
    return result;
}*/

function addMenuCookie2() {
    var storeData = [];
    var cookieName = $('#cookieName').val();
    var menuId = $('#menuID').val();
    var menuName = $('#menuName').val();
    var obj = {menuId: menuId, menuName: menuName};
    var cookie = $.cookie({cookieName, menuId, menuName});
    if(cookie) {
        storeData = JSON.parse(cookie);
    }
    storeData.push(obj);
    $.cookie(cookieName, menuId, menuName, JSON.stringify(storeData), {expires: 3, path: '/'});
}

//쿠키 가져오기

function getMenuCookie2() {
    var result;
    var cookieName = $('#cookieName').val();
    var cookie = $.cookie(cookieName);
    if(cookie) {
        result = JSON.parse(cookie);
    }
    return result;
}