// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const otherScores = [10, 20];

  //スプレッド構文
  const scores = [80, 90, 40, 70, ...otherScores];
  // console.log(scores);

  function sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores);
  // sum(10, 20)
}
