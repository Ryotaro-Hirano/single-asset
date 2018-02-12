/**
 * InfoWindow オブジェクトを生成する。
 *
 * @param result ジオコーダの実行結果
 *
 */
function createInfoWindow(result) {
    var infoWindow = new google.maps.InfoWindow({
        content: createTag(result), // InfoWindow に表示するコンテンツ
        // maxWidth: 1000 // width は CSS で制御するようにしたのでコメントアウト
    });
    return infoWindow;
}
