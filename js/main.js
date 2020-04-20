// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode =  document.getElementById('target');

    targetNode.className = 'my-color my-border';
  });
}
