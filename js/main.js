// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  // alert('hello');
  const answer = confirm('削除しますか？');
  if (answer) {
    console.log('削除しました');
  } else {
    console.log('キャンセルしました');
  }
}
