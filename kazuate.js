let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let k1 = document.querySelector('span#kaisu');
let k = document.createElement('k');
let a1 = document.querySelector('span#answer');
let a = document.createElement('a');
let p1 = document.querySelector('p#result');
let r = document.createElement('r');

// ボタン
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  let i = document.querySelector('input[name="kazu"]');
  let yoso = i.value;
  Number(yoso);

  kaisu++;
  console.log(kaisu+"回目の予想: "+yoso);
  //4-1:
  k.textContent = kaisu;
  k1.textContent = yoso;
  a1.insertAdjacentElement('afterbegin', a);
// ボタンを押した後の処理をする関数 hantei() の定義
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  if(kaisu >= 4 ) {
    console.log('答えは'+kotae+'でした．すでにゲームは終わっています');
    r.textContet = '答えは'+kotae+'でした．すでにゲームは終わっています';
  }else if(yoso == kotae){
    console.log('正解です．おめでとう!');
    r.textContet = '正解です．おめでとう!';
  }else if(kaisu === 3){
    console.log('まちがい．残念でした答えは'+kotae+'です．');
    r.textContet = 'まちがい．残念でした答えは'+kotae+'です．';
  }else if(kaisu <= 2 && yoso < kotae){
    console.log('まちがい．答えはもっと大きいですよ');
    r.textContet = 'まちがい．答えはもっと大きいですよ';
  }else if(kaisu <= 2 && yoso > kotae){
    console.log('まちがい．答えはもっと小さいですよ');
    r.textContet = 'まちがい．答えはもっと小さいですよ';
  }
  p1.insertAdjacentElement('afterbegin', r);
}
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
