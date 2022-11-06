
var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(35.482089399856, 129.39899953137365),
    zoom: 13
});


//////////////////////////////////////////////
var mainport_coal = new naver.maps.LatLng(35.532242474063295, 129.3730174876747),
    marker_mainport_coal = new naver.maps.Marker({
        map: map,
        position: mainport_coal,
    });

naver.maps.Event.addListener(marker_mainport_coal, "click", function (e) {
    if (infowindow_mainport_coal.getMap()) {
        infowindow_mainport_coal.close();
    } else {
        infowindow_mainport_coal.open(map, marker_mainport_coal);
    }
});
var contentString_mainport_coal = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_coal = new naver.maps.InfoWindow({
    content: contentString_mainport_coal,
});
//////////////////////////////////////////////
var mainport_1pier = new naver.maps.LatLng(35.52796703002789, 129.3737016875752),
    mark_mainport_1pier = new naver.maps.Marker({
        map: map,
        position: mainport_1pier
    });
naver.maps.Event.addListener(mark_mainport_1pier, "click", function (e) {
    if (infowindow_mainport_1pier.getMap()) {
        infowindow_mainport_1pier.close();
    } else {
        infowindow_mainport_1pier.open(map, mark_mainport_1pier);
    }
});
var contentString_mainport_1pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_1pier = new naver.maps.InfoWindow({
    content: contentString_mainport_1pier,
});
//////////////////////////////////////////////
var mainport_2pier = new naver.maps.LatLng(35.52622454584383, 129.37250402724584),
    mark_mainport_2pier = new naver.maps.Marker({
        map: map,
        position: mainport_2pier
    });
naver.maps.Event.addListener(mark_mainport_2pier, "click", function (e) {
    if (infowindow_mainport_2pier.getMap()) {
        infowindow_mainport_2pier.close();
    } else {
        infowindow_mainport_2pier.open(map, mark_mainport_2pier);
    }
});
var contentString_mainport_2pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_2pier = new naver.maps.InfoWindow({
    content: contentString_mainport_2pier,
});
//////////////////////////////////////////////
var mainport_34pier = new naver.maps.LatLng(35.521783979938995, 129.3747098590999),
    mark_mainport_34pier = new naver.maps.Marker({
        map: map,
        position: mainport_34pier
    });
naver.maps.Event.addListener(mark_mainport_34pier, "click", function (e) {
    if (infowindow_mainport_34pier.getMap()) {
        infowindow_mainport_34pier.close();
    } else {
        infowindow_mainport_34pier.open(map, mark_mainport_34pier);
    }
});
var contentString_mainport_34pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_34pier = new naver.maps.InfoWindow({
    content: contentString_mainport_34pier,
});
//////////////////////////////////////////////
var mainport_5pier = new naver.maps.LatLng(35.51932867743135, 129.374020304463),
    mark_mainport_5pier = new naver.maps.Marker({
        map: map,
        position: mainport_5pier
    });
naver.maps.Event.addListener(mark_mainport_5pier, "click", function (e) {
    if (infowindow_mainport_5pier.getMap()) {
        infowindow_mainport_5pier.close();
    } else {
        infowindow_mainport_5pier.open(map, mark_mainport_5pier);
    }
});
var contentString_mainport_5pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_5pier = new naver.maps.InfoWindow({
    content: contentString_mainport_5pier,
});
//////////////////////////////////////////////
var mainport_6pier = new naver.maps.LatLng(35.516551309463985, 129.3786995314639),
    mark_mainport_6pier = new naver.maps.Marker({
        map: map,
        position: mainport_6pier
    });
naver.maps.Event.addListener(mark_mainport_6pier, "click", function (e) {
    if (infowindow_mainport_6pier.getMap()) {
        infowindow_mainport_6pier.close();
    } else {
        infowindow_mainport_6pier.open(map, mark_mainport_6pier);
    }
});
var contentString_mainport_6pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_6pier = new naver.maps.InfoWindow({
    content: contentString_mainport_6pier,
});
//////////////////////////////////////////////
var mainport_7pier = new naver.maps.LatLng(35.516218686111415, 129.38276744107063),
    mark_mainport_7pier = new naver.maps.Marker({
        map: map,
        position: mainport_7pier
    });
naver.maps.Event.addListener(mark_mainport_7pier, "click", function (e) {
    if (infowindow_mainport_7pier.getMap()) {
        infowindow_mainport_7pier.close();
    } else {
        infowindow_mainport_7pier.open(map, mark_mainport_7pier);
    }
});
var contentString_mainport_7pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_7pier = new naver.maps.InfoWindow({
    content: contentString_mainport_7pier,
});
//////////////////////////////////////////////
var mainport_8pier = new naver.maps.LatLng(35.51463159999581, 129.3855638477286),
    mark_mainport_8pier = new naver.maps.Marker({
        map: map,
        position: mainport_8pier
    });
naver.maps.Event.addListener(mark_mainport_8pier, "click", function (e) {
    if (infowindow_mainport_8pier.getMap()) {
        infowindow_mainport_8pier.close();
    } else {
        infowindow_mainport_8pier.open(map, mark_mainport_8pier);
    }
});
var contentString_mainport_8pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_8pier = new naver.maps.InfoWindow({
    content: contentString_mainport_8pier,
});
//////////////////////////////////////////////
var mainport_9pier = new naver.maps.LatLng(35.511499085667694, 129.38540501162413),
    mark_mainport_9pier = new naver.maps.Marker({
        map: map,
        position: mainport_9pier
    });
naver.maps.Event.addListener(mark_mainport_9pier, "click", function (e) {
    if (infowindow_mainport_9pier.getMap()) {
        infowindow_mainport_9pier.close();
    } else {
        infowindow_mainport_9pier.open(map, mark_mainport_9pier);
    }
});
var contentString_mainport_9pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_9pier = new naver.maps.InfoWindow({
    content: contentString_mainport_9pier,
});
//////////////////////////////////////////////
var mainport_gengeralpier = new naver.maps.LatLng(35.50806401973908, 129.38596454673527),
    mark_mainport_gengeralpier = new naver.maps.Marker({
        map: map,
        position: mainport_gengeralpier
    });
naver.maps.Event.addListener(mark_mainport_gengeralpier, "click", function (e) {
    if (infowindow_mainport_gengeralpier.getMap()) {
        infowindow_mainport_gengeralpier.close();
    } else {
        infowindow_mainport_gengeralpier.open(map, mark_mainport_gengeralpier);
    }
});
var contentString_mainport_gengeralpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_gengeralpier = new naver.maps.InfoWindow({
    content: contentString_mainport_gengeralpier,
});
//////////////////////////////////////////////
var mainport_yumpopier = new naver.maps.LatLng(35.51600682841824, 129.39618455182224),
    mark_mainport_yumpopier = new naver.maps.Marker({
        map: map,
        position: mainport_yumpopier
    });
naver.maps.Event.addListener(mark_mainport_yumpopier, "click", function (e) {
    if (infowindow_mainport_yumpopier.getMap()) {
        infowindow_mainport_yumpopier.close();
    } else {
        infowindow_mainport_yumpopier.open(map, mark_mainport_yumpopier);
    }
});
var contentString_mainport_yumpopier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_yumpopier = new naver.maps.InfoWindow({
    content: contentString_mainport_yumpopier,
});
//////////////////////////////////////////////
var mainport_carpier = new naver.maps.LatLng(35.53324554807, 129.38291834076477),
    mark_mainport_carpier = new naver.maps.Marker({
        map: map,
        position: mainport_carpier
    });
naver.maps.Event.addListener(mark_mainport_carpier, "click", function (e) {
    if (infowindow_mainport_carpier.getMap()) {
        infowindow_mainport_carpier.close();
    } else {
        infowindow_mainport_carpier.open(map, mark_mainport_carpier);
    }
});
var contentString_mainport_carpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_carpier = new naver.maps.InfoWindow({
    content: contentString_mainport_carpier,
});
//////////////////////////////////////////////
var mainport_sk1pier = new naver.maps.LatLng(35.50420066196126, 129.36159682578344),
    mark_mainport_sk1pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk1pier
    });
naver.maps.Event.addListener(mark_mainport_sk1pier, "click", function (e) {
    if (infowindow_mainport_sk1pier.getMap()) {
        infowindow_mainport_sk1pier.close();
    } else {
        infowindow_mainport_sk1pier.open(map, mark_mainport_sk1pier);
    }
});
var contentString_mainport_sk1pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk1pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk1pier,
});
//////////////////////////////////////////////
var mainport_sk2pier = new naver.maps.LatLng(35.498066438490625, 129.36655177121347),
    mark_mainport_sk2pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk2pier
    });
naver.maps.Event.addListener(mark_mainport_sk2pier, "click", function (e) {
    if (infowindow_mainport_sk2pier.getMap()) {
        infowindow_mainport_sk2pier.close();
    } else {
        infowindow_mainport_sk2pier.open(map, mark_mainport_sk2pier);
    }
});
var contentString_mainport_sk2pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk2pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk2pier,
});
//////////////////////////////////////////////
var mainport_sk3pier = new naver.maps.LatLng(35.49448688845792, 129.38268715872113),
    mark_mainport_sk3pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk3pier
    });
naver.maps.Event.addListener(mark_mainport_sk3pier, "click", function (e) {
    if (infowindow_mainport_sk3pier.getMap()) {
        infowindow_mainport_sk3pier.close();
    } else {
        infowindow_mainport_sk3pier.open(map, mark_mainport_sk3pier);
    }
});
var contentString_mainport_sk3pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk3pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk3pier,
});
//////////////////////////////////////////////
var mainport_sk4pier = new naver.maps.LatLng( 35.492253908023436, 129.38442808137225),
    mark_mainport_sk4pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk4pier
    });
naver.maps.Event.addListener(mark_mainport_sk4pier, "click", function (e) {
    if (infowindow_mainport_sk4pier.getMap()) {
        infowindow_mainport_sk4pier.close();
    } else {
        infowindow_mainport_sk4pier.open(map, mark_mainport_sk4pier);
    }
});
var contentString_mainport_sk4pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk4pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk4pier,
});
//////////////////////////////////////////////
var mainport_sk5pier = new naver.maps.LatLng( 35.49005431211885, 129.38630210536576),
    mark_mainport_sk5pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk5pier
    });
naver.maps.Event.addListener(mark_mainport_sk5pier, "click", function (e) {
    if (infowindow_mainport_sk5pier.getMap()) {
        infowindow_mainport_sk5pier.close();
    } else {
        infowindow_mainport_sk5pier.open(map, mark_mainport_sk5pier);
    }
});
var contentString_mainport_sk5pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk5pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk5pier,
});
//////////////////////////////////////////////
var mainport_sk6pier = new naver.maps.LatLng( 35.485570780503295, 129.3906642890492),
    mark_mainport_sk6pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk6pier
    });
naver.maps.Event.addListener(mark_mainport_sk6pier, "click", function (e) {
    if (infowindow_mainport_sk6pier.getMap()) {
        infowindow_mainport_sk6pier.close();
    } else {
        infowindow_mainport_sk6pier.open(map, mark_mainport_sk6pier);
    }
});
var contentString_mainport_sk6pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk6pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk6pier,
});
//////////////////////////////////////////////
var mainport_sk7pier = new naver.maps.LatLng( 35.482705366892475, 129.39066751931156),
    mark_mainport_sk7pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk7pier
    });
naver.maps.Event.addListener(mark_mainport_sk7pier, "click", function (e) {
    if (infowindow_mainport_sk7pier.getMap()) {
        infowindow_mainport_sk7pier.close();
    } else {
        infowindow_mainport_sk7pier.open(map, mark_mainport_sk7pier);
    }
});
var contentString_mainport_sk7pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk7pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk7pier,
});
//////////////////////////////////////////////
var mainport_sk8pier = new naver.maps.LatLng( 35.47937036969445, 129.390722938932),
    mark_mainport_sk8pier = new naver.maps.Marker({
        map: map,
        position: mainport_sk8pier
    });
naver.maps.Event.addListener(mark_mainport_sk8pier, "click", function (e) {
    if (infowindow_mainport_sk8pier.getMap()) {
        infowindow_mainport_sk8pier.close();
    } else {
        infowindow_mainport_sk8pier.open(map, mark_mainport_sk8pier);
    }
});
var contentString_mainport_sk8pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_sk8pier = new naver.maps.InfoWindow({
    content: contentString_mainport_sk8pier,
});
//////////////////////////////////////////////
var mainport_gaspier = new naver.maps.LatLng( 35.4850919614459, 129.38481130008614),
    mark_mainport_gaspier = new naver.maps.Marker({
        map: map,
        position: mainport_gaspier
    });
naver.maps.Event.addListener(mark_mainport_gaspier, "click", function (e) {
    if (infowindow_mainport_gaspier.getMap()) {
        infowindow_mainport_gaspier.close();
    } else {
        infowindow_mainport_gaspier.open(map, mark_mainport_gaspier);
    }
});
var contentString_mainport_gaspier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_gaspier = new naver.maps.InfoWindow({
    content: contentString_mainport_gaspier,
});
//////////////////////////////////////////////
var mainport_namhwapier = new naver.maps.LatLng(35.477218389167774, 129.3829042551749),
    mark_mainport_namhwapier = new naver.maps.Marker({
        map: map,
        position: mainport_namhwapier
    });
naver.maps.Event.addListener(mark_mainport_namhwapier, "click", function (e) {
    if (infowindow_mainport_namhwapier.getMap()) {
        infowindow_mainport_namhwapier.close();
    } else {
        infowindow_mainport_namhwapier.open(map, mark_mainport_namhwapier);
    }
});
var contentString_mainport_namhwapier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_namhwapier = new naver.maps.InfoWindow({
    content: contentString_mainport_namhwapier,
});
//////////////////////////////////////////////
var mainport_uttpier = new naver.maps.LatLng( 35.49863921503861, 129.37957040747284),
    mark_mainport_uttpier = new naver.maps.Marker({
        map: map,
        position: mainport_uttpier
    });
naver.maps.Event.addListener(mark_mainport_uttpier, "click", function (e) {
    if (infowindow_mainport_uttpier.getMap()) {
        infowindow_mainport_uttpier.close();
    } else {
        infowindow_mainport_uttpier.open(map, mark_mainport_uttpier);
    }
});
var contentString_mainport_uttpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_uttpier = new naver.maps.InfoWindow({
    content: contentString_mainport_uttpier,
});
//////////////////////////////////////////////
var mainport_yangcopier = new naver.maps.LatLng( 35.49688237678871, 129.38092890365465),
    mark_mainport_yangcopier = new naver.maps.Marker({
        map: map,
        position: mainport_yangcopier
    });
naver.maps.Event.addListener(mark_mainport_yangcopier, "click", function (e) {
    if (infowindow_mainport_yangcopier.getMap()) {
        infowindow_mainport_yangcopier.close();
    } else {
        infowindow_mainport_yangcopier.open(map, mark_mainport_yangcopier);
    }
});
var contentString_mainport_yangcopier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mainport_yangcopier = new naver.maps.InfoWindow({
    content: contentString_mainport_yangcopier,
});
//////////////////////////////////////////////
var mopoport_mipopier = new naver.maps.LatLng( 35.524488332884154, 129.4378461490811),
    mark_mopoport_mipopier = new naver.maps.Marker({
        map: map,
        position: mopoport_mipopier
    });
naver.maps.Event.addListener(mark_mopoport_mipopier, "click", function (e) {
    if (infowindow_mopoport_mipopier.getMap()) {
        infowindow_mopoport_mipopier.close();
    } else {
        infowindow_mopoport_mipopier.open(map, mark_mopoport_mipopier);
    }
});
var contentString_mopoport_mipopier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_mopoport_mipopier = new naver.maps.InfoWindow({
    content: contentString_mopoport_mipopier,
});
//////////////////////////////////////////////
var newport_sandpier = new naver.maps.LatLng( 35.45935768176478, 129.35638613337332),
    mark_newport_sandpier = new naver.maps.Marker({
        map: map,
        position: newport_sandpier
    });
naver.maps.Event.addListener(mark_newport_sandpier, "click", function (e) {
    if (infowindow_newport_sandpier.getMap()) {
        infowindow_newport_sandpier.close();
    } else {
        infowindow_newport_sandpier.open(map, mark_newport_sandpier);
    }
});
var contentString_newport_sandpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_sandpier = new naver.maps.InfoWindow({
    content: contentString_newport_sandpier,
});
//////////////////////////////////////////////
var newport_wheatflourpier = new naver.maps.LatLng(35.457275756466466, 129.36147941843146),
    mark_newport_wheatflourpier = new naver.maps.Marker({
        map: map,
        position: newport_wheatflourpier
    });
naver.maps.Event.addListener(mark_newport_wheatflourpier, "click", function (e) {
    if (infowindow_newport_wheatflourpier.getMap()) {
        infowindow_newport_wheatflourpier.close();
    } else {
        infowindow_newport_wheatflourpier.open(map, mark_newport_wheatflourpier);
    }
});
var contentString_newport_wheatflourpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_wheatflourpier = new naver.maps.InfoWindow({
    content: contentString_newport_wheatflourpier,
});
//////////////////////////////////////////////
var newport_conpier = new naver.maps.LatLng(35.4561345094968, 129.36637974528546),
    mark_newport_conpier = new naver.maps.Marker({
        map: map,
        position: newport_conpier
    });
naver.maps.Event.addListener(mark_newport_conpier, "click", function (e) {
    if (infowindow_newport_conpier.getMap()) {
        infowindow_newport_conpier.close();
    } else {
        infowindow_newport_conpier.open(map, mark_newport_conpier);
    }
});
var contentString_newport_conpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_conpier = new naver.maps.InfoWindow({
    content: contentString_newport_conpier,
});
//////////////////////////////////////////////
var newport_sebangpier = new naver.maps.LatLng(35.447311798490205, 129.37149492243918),
    mark_newport_sebangpier = new naver.maps.Marker({
        map: map,
        position: newport_sebangpier
    });
naver.maps.Event.addListener(mark_newport_sebangpier, "click", function (e) {
    if (infowindow_newport_sebangpier.getMap()) {
        infowindow_newport_sebangpier.close();
    } else {
        infowindow_newport_sebangpier.open(map, mark_newport_sebangpier);
    }
});
var contentString_newport_sebangpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_sebangpier = new naver.maps.InfoWindow({
    content: contentString_newport_sebangpier,
});
//////////////////////////////////////////////
var newport_hotpier = new naver.maps.LatLng(35.44520035754854, 129.37072823437174),
    mark_newport_hotpier = new naver.maps.Marker({
        map: map,
        position: newport_hotpier
    });
naver.maps.Event.addListener(mark_newport_hotpier, "click", function (e) {
    if (infowindow_newport_hotpier.getMap()) {
        infowindow_newport_hotpier.close();
    } else {
        infowindow_newport_hotpier.open(map, mark_newport_hotpier);
    }
});
var contentString_newport_hotpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_hotpier = new naver.maps.InfoWindow({
    content: contentString_newport_hotpier,
});
//////////////////////////////////////////////
var newport_mechangpier = new naver.maps.LatLng(35.44328284891219, 129.36926257703425),
    mark_newport_mechangpier = new naver.maps.Marker({
        map: map,
        position: newport_mechangpier
    });
naver.maps.Event.addListener(mark_newport_mechangpier, "click", function (e) {
    if (infowindow_newport_mechangpier.getMap()) {
        infowindow_newport_mechangpier.close();
    } else {
        infowindow_newport_mechangpier.open(map, mark_newport_mechangpier);
    }
});
var contentString_newport_mechangpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_mechangpier = new naver.maps.InfoWindow({
    content: contentString_newport_mechangpier,
});
//////////////////////////////////////////////
var newport_jstt3pier = new naver.maps.LatLng(35.44178807925016, 129.3682938502932),
    mark_newport_jstt3pier = new naver.maps.Marker({
        map: map,
        position: newport_jstt3pier
    });
naver.maps.Event.addListener(mark_newport_jstt3pier, "click", function (e) {
    if (infowindow_newport_jstt3pier.getMap()) {
        infowindow_newport_jstt3pier.close();
    } else {
        infowindow_newport_jstt3pier.open(map, mark_newport_jstt3pier);
    }
});
var contentString_newport_jstt3pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_jstt3pier = new naver.maps.InfoWindow({
    content: contentString_newport_jstt3pier,
});
//////////////////////////////////////////////
var newport_jstt4pier = new naver.maps.LatLng( 35.4387538574145, 129.36679561364357),
    mark_newport_jstt4pier = new naver.maps.Marker({
        map: map,
        position: newport_jstt4pier
    });
naver.maps.Event.addListener(mark_newport_jstt4pier, "click", function (e) {
    if (infowindow_newport_jstt4pier.getMap()) {
        infowindow_newport_jstt4pier.close();
    } else {
        infowindow_newport_jstt4pier.open(map, mark_newport_jstt4pier);
    }
});
var contentString_newport_jstt4pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_jstt4pier = new naver.maps.InfoWindow({
    content: contentString_newport_jstt4pier,
});
//////////////////////////////////////////////
var newport_tspier = new naver.maps.LatLng( 35.44171655760052, 129.37925842742735),
    mark_newport_tspier = new naver.maps.Marker({
        map: map,
        position: newport_tspier
    });
naver.maps.Event.addListener(mark_newport_tspier, "click", function (e) {
    if (infowindow_newport_tspier.getMap()) {
        infowindow_newport_tspier.close();
    } else {
        infowindow_newport_tspier.open(map, mark_newport_tspier);
    }
});
var contentString_newport_tspier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_tspier = new naver.maps.InfoWindow({
    content: contentString_newport_tspier,
});
//////////////////////////////////////////////
var newport_lspier = new naver.maps.LatLng(35.43636864364209, 129.3671221286407),
    mark_newport_lspier = new naver.maps.Marker({
        map: map,
        position: newport_lspier
    });
naver.maps.Event.addListener(mark_newport_lspier, "click", function (e) {
    if (infowindow_newport_lspier.getMap()) {
        infowindow_newport_lspier.close();
    } else {
        infowindow_newport_lspier.open(map, mark_newport_lspier);
    }
});
var contentString_newport_lspier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_lspier = new naver.maps.InfoWindow({
    content: contentString_newport_lspier,
});
//////////////////////////////////////////////
var newport_daeteongpier = new naver.maps.LatLng(35.435641041045216, 129.3693028009566),
    mark_newport_daeteongpier = new naver.maps.Marker({
        map: map,
        position: newport_daeteongpier
    });
naver.maps.Event.addListener(mark_newport_daeteongpier, "click", function (e) {
    if (infowindow_newport_daeteongpier.getMap()) {
        infowindow_newport_daeteongpier.close();
    } else {
        infowindow_newport_daeteongpier.open(map, mark_newport_daeteongpier);
    }
});
var contentString_newport_daeteongpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_daeteongpier = new naver.maps.InfoWindow({
    content: contentString_newport_daeteongpier,
});
//////////////////////////////////////////////
var newport_hanjeanpier = new naver.maps.LatLng(35.43540070813939, 129.3705288611699),
    mark_newport_hanjeanpier = new naver.maps.Marker({
        map: map,
        position: newport_hanjeanpier
    });
naver.maps.Event.addListener(mark_newport_hanjeanpier, "click", function (e) {
    if (infowindow_newport_hanjeanpier.getMap()) {
        infowindow_newport_hanjeanpier.close();
    } else {
        infowindow_newport_hanjeanpier.open(map, mark_newport_hanjeanpier);
    }
});
var contentString_newport_hanjeanpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_hanjeanpier = new naver.maps.InfoWindow({
    content: contentString_newport_hanjeanpier,
});
//////////////////////////////////////////////
var newport_glspier = new naver.maps.LatLng( 35.43323161866873, 129.37086159633927),
    mark_newport_glspier = new naver.maps.Marker({
        map: map,
        position: newport_glspier
    });
naver.maps.Event.addListener(mark_newport_glspier, "click", function (e) {
    if (infowindow_newport_glspier.getMap()) {
        infowindow_newport_glspier.close();
    } else {
        infowindow_newport_glspier.open(map, mark_newport_glspier);
    }
});
var contentString_newport_glspier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_newport_glspier = new naver.maps.InfoWindow({
    content: contentString_newport_glspier,
});
//////////////////////////////////////////////
var onsanport_htpier = new naver.maps.LatLng(35.46286395100826, 129.34662020579344),
    mark_onsanport_htpier = new naver.maps.Marker({
        map: map,
        position: onsanport_htpier
    });
naver.maps.Event.addListener(mark_onsanport_htpier, "click", function (e) {
    if (infowindow_onsanport_htpier.getMap()) {
        infowindow_onsanport_htpier.close();
    } else {
        infowindow_onsanport_htpier.open(map, mark_onsanport_htpier);
    }
});
var contentString_onsanport_htpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_htpier = new naver.maps.InfoWindow({
    content: contentString_onsanport_htpier,
});
//////////////////////////////////////////////
var onsanport_youhwae2pier = new naver.maps.LatLng(35.459833798963636, 129.34675242042402),
    mark_onsanport_youhwae2pier = new naver.maps.Marker({
        map: map,
        position: onsanport_youhwae2pier
    });
naver.maps.Event.addListener(mark_onsanport_youhwae2pier, "click", function (e) {
    if (infowindow_onsanport_youhwae2pier.getMap()) {
        infowindow_onsanport_youhwae2pier.close();
    } else {
        infowindow_onsanport_youhwae2pier.open(map, mark_onsanport_youhwae2pier);
    }
});
var contentString_onsanport_youhwae2pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_youhwae2pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_youhwae2pier,
});
//////////////////////////////////////////////
var onsanport_otkpier = new naver.maps.LatLng( 35.45700864471917, 129.34746325776607),
    mark_onsanport_otkpier = new naver.maps.Marker({
        map: map,
        position: onsanport_otkpier
    });
naver.maps.Event.addListener(mark_onsanport_otkpier, "click", function (e) {
    if (infowindow_onsanport_otkpier.getMap()) {
        infowindow_onsanport_otkpier.close();
    } else {
        infowindow_onsanport_otkpier.open(map, mark_onsanport_otkpier);
    }
});
var contentString_onsanport_otkpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_otkpier = new naver.maps.InfoWindow({
    content: contentString_onsanport_otkpier,
});
//////////////////////////////////////////////
var onsanport_youhwae1pier = new naver.maps.LatLng( 35.454660343980365, 129.34774741127816),
    mark_onsanport_youhwae1pier = new naver.maps.Marker({
        map: map,
        position: onsanport_youhwae1pier
    });
naver.maps.Event.addListener(mark_onsanport_youhwae1pier, "click", function (e) {
    if (infowindow_onsanport_youhwae1pier.getMap()) {
        infowindow_onsanport_youhwae1pier.close();
    } else {
        infowindow_onsanport_youhwae1pier.open(map, mark_onsanport_youhwae1pier);
    }
});
var contentString_onsanport_youhwae1pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_youhwae1pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_youhwae1pier,
});
//////////////////////////////////////////////
var onsanport_soil3pier = new naver.maps.LatLng(35.451552147479184, 129.34818565912803),
    mark_onsanport_soil3pier = new naver.maps.Marker({
        map: map,
        position: onsanport_soil3pier
    });
naver.maps.Event.addListener(mark_onsanport_soil3pier, "click", function (e) {
    if (infowindow_onsanport_soil3pier.getMap()) {
        infowindow_onsanport_soil3pier.close();
    } else {
        infowindow_onsanport_soil3pier.open(map, mark_onsanport_soil3pier);
    }
});
var contentString_onsanport_soil3pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_soil3pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_soil3pier,
});
//////////////////////////////////////////////
var onsanport_soil1pier = new naver.maps.LatLng(35.44788726948363, 129.354994434926),
    mark_onsanport_soil1pier = new naver.maps.Marker({
        map: map,
        position: onsanport_soil1pier
    });
naver.maps.Event.addListener(mark_onsanport_soil1pier, "click", function (e) {
    if (infowindow_onsanport_soil1pier.getMap()) {
        infowindow_onsanport_soil1pier.close();
    } else {
        infowindow_onsanport_soil1pier.open(map, mark_onsanport_soil1pier);
    }
});
var contentString_onsanport_soil1pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_soil1pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_soil1pier,
});
//////////////////////////////////////////////
var onsanport_soil2pier = new naver.maps.LatLng(35.44684674932041, 129.35844372832716),
    mark_onsanport_soil2pier = new naver.maps.Marker({
        map: map,
        position: onsanport_soil2pier
    });
naver.maps.Event.addListener(mark_onsanport_soil2pier, "click", function (e) {
    if (infowindow_onsanport_soil2pier.getMap()) {
        infowindow_onsanport_soil2pier.close();
    } else {
        infowindow_onsanport_soil2pier.open(map, mark_onsanport_soil2pier);
    }
});
var contentString_onsanport_soil2pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_soil2pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_soil2pier,
});
//////////////////////////////////////////////
var onsanport_dongbookpier = new naver.maps.LatLng(35.44560651037477, 129.35920033999062),
    mark_onsanport_dongbookpier = new naver.maps.Marker({
        map: map,
        position: onsanport_dongbookpier
    });
naver.maps.Event.addListener(mark_onsanport_dongbookpier, "click", function (e) {
    if (infowindow_onsanport_dongbookpier.getMap()) {
        infowindow_onsanport_dongbookpier.close();
    } else {
        infowindow_onsanport_dongbookpier.open(map, mark_onsanport_dongbookpier);
    }
});
var contentString_onsanport_dongbookpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_dongbookpier = new naver.maps.InfoWindow({
    content: contentString_onsanport_dongbookpier,
});
//////////////////////////////////////////////
var onsanport_husongpier = new naver.maps.LatLng(35.443302928313834, 129.35719515340782),
    mark_onsanport_husongpier = new naver.maps.Marker({
        map: map,
        position: onsanport_husongpier
    });
naver.maps.Event.addListener(mark_onsanport_husongpier, "click", function (e) {
    if (infowindow_onsanport_husongpier.getMap()) {
        infowindow_onsanport_husongpier.close();
    } else {
        infowindow_onsanport_husongpier.open(map, mark_onsanport_husongpier);
    }
});
var contentString_onsanport_husongpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_husongpier = new naver.maps.InfoWindow({
    content: contentString_onsanport_husongpier,
});
//////////////////////////////////////////////
var onsanport_jeongliconpier = new naver.maps.LatLng(35.442478793513835, 129.35510107080998),
    mark_onsanport_jeongliconpier = new naver.maps.Marker({
        map: map,
        position: onsanport_jeongliconpier
    });
naver.maps.Event.addListener(mark_onsanport_jeongliconpier, "click", function (e) {
    if (infowindow_onsanport_jeongliconpier.getMap()) {
        infowindow_onsanport_jeongliconpier.close();
    } else {
        infowindow_onsanport_jeongliconpier.open(map, mark_onsanport_jeongliconpier);
    }
});
var contentString_onsanport_jeongliconpier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_jeongliconpier = new naver.maps.InfoWindow({
    content: contentString_onsanport_jeongliconpier,
});
//////////////////////////////////////////////
var onsanport_darpopier = new naver.maps.LatLng(35.44035524579058, 129.35310132417473),
    mark_onsanport_darpopier = new naver.maps.Marker({
        map: map,
        position: onsanport_darpopier
    });
naver.maps.Event.addListener(mark_onsanport_darpopier, "click", function (e) {
    if (infowindow_onsanport_darpopier.getMap()) {
        infowindow_onsanport_darpopier.close();
    } else {
        infowindow_onsanport_darpopier.open(map, mark_onsanport_darpopier);
    }
});
var contentString_onsanport_darpopier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_darpopier = new naver.maps.InfoWindow({
    content: contentString_onsanport_darpopier,
});
//////////////////////////////////////////////
var onsanport_onsan1pier = new naver.maps.LatLng(35.438017197844054, 129.3547068126348),
    mark_onsanport_onsan1pier = new naver.maps.Marker({
        map: map,
        position: onsanport_onsan1pier
    });
naver.maps.Event.addListener(mark_onsanport_onsan1pier, "click", function (e) {
    if (infowindow_onsanport_onsan1pier.getMap()) {
        infowindow_onsanport_onsan1pier.close();
    } else {
        infowindow_onsanport_onsan1pier.open(map, mark_onsanport_onsan1pier);
    }
});
var contentString_onsanport_onsan1pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_onsan1pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_onsan1pier,
});
//////////////////////////////////////////////
var onsanport_onsan2pier = new naver.maps.LatLng(35.438159502904476, 129.35664876744556),
    mark_onsanport_onsan2pier = new naver.maps.Marker({
        map: map,
        position: onsanport_onsan2pier
    });
naver.maps.Event.addListener(mark_onsanport_onsan2pier, "click", function (e) {
    if (infowindow_onsanport_onsan2pier.getMap()) {
        infowindow_onsanport_onsan2pier.close();
    } else {
        infowindow_onsanport_onsan2pier.open(map, mark_onsanport_onsan2pier);
    }
});
var contentString_onsanport_onsan2pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_onsan2pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_onsan2pier,
});
//////////////////////////////////////////////
var onsanport_onsan3pier = new naver.maps.LatLng(35.43867834012121, 129.35776493034277),
    mark_onsanport_onsan3pier = new naver.maps.Marker({
        map: map,
        position: onsanport_onsan3pier
    });
naver.maps.Event.addListener(mark_onsanport_onsan3pier, "click", function (e) {
    if (infowindow_onsanport_onsan3pier.getMap()) {
        infowindow_onsanport_onsan3pier.close();
    } else {
        infowindow_onsanport_onsan3pier.open(map, mark_onsanport_onsan3pier);
    }
});
var contentString_onsanport_onsan3pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_onsan3pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_onsan3pier,
});
//////////////////////////////////////////////
var onsanport_onsan4pier = new naver.maps.LatLng(35.43940025090677, 129.36139741389388),
    mark_onsanport_onsan4pier = new naver.maps.Marker({
        map: map,
        position: onsanport_onsan4pier
    });
naver.maps.Event.addListener(mark_onsanport_onsan4pier, "click", function (e) {
    if (infowindow_onsanport_onsan4pier.getMap()) {
        infowindow_onsanport_onsan4pier.close();
    } else {
        infowindow_onsanport_onsan4pier.open(map, mark_onsanport_onsan4pier);
    }
});
var contentString_onsanport_onsan4pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_onsan4pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_onsan4pier,
});
//////////////////////////////////////////////
var onsanport_jstt1pier = new naver.maps.LatLng(35.441517413185075, 129.3655552628787),
    mark_onsanport_jstt1pier = new naver.maps.Marker({
        map: map,
        position: onsanport_jstt1pier
    });
naver.maps.Event.addListener(mark_onsanport_jstt1pier, "click", function (e) {
    if (infowindow_onsanport_jstt1pier.getMap()) {
        infowindow_onsanport_jstt1pier.close();
    } else {
        infowindow_onsanport_jstt1pier.open(map, mark_onsanport_jstt1pier);
    }
});
var contentString_onsanport_jstt1pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_jstt1pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_jstt1pier,
});
//////////////////////////////////////////////
var onsanport_jstt2pier = new naver.maps.LatLng(35.44789449949696, 129.36935375865772),
    mark_onsanport_jstt2pier = new naver.maps.Marker({
        map: map,
        position: onsanport_jstt2pier
    });
naver.maps.Event.addListener(mark_onsanport_jstt2pier, "click", function (e) {
    if (infowindow_onsanport_jstt2pier.getMap()) {
        infowindow_onsanport_jstt2pier.close();
    } else {
        infowindow_onsanport_jstt2pier.open(map, mark_onsanport_jstt2pier);
    }
});
var contentString_onsanport_jstt2pier = [
    '<div class="iw_inner" align="center">',
    '   <h3>석탄부두</h3>',
    '   <table border="1" style="margin: 10px">',
    '       <tr><td bgcolor="#f0f8ff">길이(m)</td><td>270</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">수심(m)</td><td>12</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">접안능력(DWT)</td><td>40,000</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">척수</td><td>1</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">형식</td><td>잔교</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">하역능력(천톤)</td><td>1,560</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">취급화물(기본계획)</td><td>석탄</td></tr>',
    '       <tr><td bgcolor="#f0f8ff">운영사</td><td>공용</td></tr>',
    '   </table>',
    '   </p>',
    '</div>'
].join('');
var infowindow_onsanport_jstt2pier = new naver.maps.InfoWindow({
    content: contentString_onsanport_jstt2pier,
});