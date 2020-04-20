// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

// イベント
{
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'Changed!';
  });
}
