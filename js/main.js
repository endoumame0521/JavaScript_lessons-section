// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode =  document.getElementById('target');

    // カスタムデータ属性
    // targetNode.textContent = 'Dotinstall';
    targetNode.textContent = targetNode.dataset.translation;
  });
}
