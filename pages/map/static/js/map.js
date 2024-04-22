var locations = [
        ["Mount Hermon", 33.2822, 35.7152],
    ["Ramon Valley", 30.6118, 34.8003],
    ["Ein Akev", 30.9563, 34.7624],
    ["Negev Downhill", 30.9020, 34.4055]
];

function initMap() {
    var center = { lat: 31.2614366, lng: 34.8259063 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: center,
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(
                locations[count][1],
                locations[count][2]
            ),
            map: map,
            title: locations[count][0]
        });
        google.maps.event.addListener(
            marker,
            "click",
            (function (marker, count) {
                return function () {
                    infowindow.setContent("<div style='color: black;'>" +locations[count][0]);
                    infowindow.open(map, marker);
                };
            })(marker, count)
        );
    }
}
