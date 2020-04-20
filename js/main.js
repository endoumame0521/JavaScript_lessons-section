// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

// カプセル化
{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
  }

  setTimeout(update, 1000);
}
