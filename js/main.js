// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

// イベント
{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode =  document.getElementById('target');
    targetNode.textContent = 'Changed!';
    targetNode.title = 'This is title!';
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue';
  });
}
