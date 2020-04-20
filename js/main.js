// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  let i = 0;

  function showTime() {
    console.log(new Date());
    i++;
    if (i >2) {
      // この関数が3回実行されたら終了させる
      clearInterval(intervalId);
    }
  }

  // 関数そのものを100ms毎に実行し続ける
  // 注意）関数の（）は要らない。
  // （）を入れてしまうと、関数の返り値を繰り返し処理してしまう。
  const intervalId = setInterval(showTime, 1000);
}
