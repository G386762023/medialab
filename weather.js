// let data= {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

// ////////// 課題3-2 ここからプログラムを書こう
// console.log(data)
// let div = document.querySelector('div#result');
// let ul = document.createElement('ul'); 
// ul.textContent = '緯度'+data.coord.lon+'経度'+data.coord.lat;
// div.insertAdjacentElement('beforeend', ul);

//button
let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);


function showSelectResult() {
    let s = document.querySelector('select#city');
    let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素

    console.log('選択された ' + idx + ' 番目の option の情報:');
    console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o.textContent);
    
    function sendRequest() {
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';  
      axios.get(url).then(showResult).catch(showError).then(finish);
}
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
}