// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const scores = [80, 90, 40, 70];
  scores.push(60, 50);
  scores.shift();
  // 90, 40, 70. 60, 50

  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

  // for (let i = 0; i < 3; i++) {
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}
