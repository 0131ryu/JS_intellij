var map;

$(function() {
    showMap();
});

function showMap() {
   map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 33.3617,
            lng: 126.5292
        }
    });
}