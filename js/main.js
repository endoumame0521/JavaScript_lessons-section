// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  // Todoリストの消し込み
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName == 'LI') {
      e.target.classList.toggle('done');
    }
  });
}
