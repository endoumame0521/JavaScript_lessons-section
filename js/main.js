// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

// カプセル化
{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    document.getElementById('target').textContent = 'Changed!';
  }

  setTimeout(update, 1000);
}
