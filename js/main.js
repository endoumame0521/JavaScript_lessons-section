// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  // セレクトボックスの操作
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.querySelector('ul').appendChild(li);
  });
}
