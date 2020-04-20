// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  // const name = 'taguchi';
  const name = 5;

  // try {} で囲った箇所は、エラーが発生しても、そこで止まることはない。
  try {
    console.log(name.toUpperCase());
  } catch (e) {
    console.log(e);
  }

  console.log('Finish');
}
