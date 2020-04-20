// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const scores = [10, 3, 9];

  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;

  // console.log(sum);
  // console.log(avg);

  // console.log(Math.floor(avg)); // 7　小数点以下切り捨て
  // console.log(Math.ceil(avg)); // 8　小数点以下切り上げ
  // console.log(Math.round(avg)); // 7　四捨五入
  // console.log(avg.toFixed(3)); // 7.333　指定した桁数のみ表示

  console.log(Math.random()); // 0以上1未満のランダムな数値を発生
}
