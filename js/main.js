// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const scores = [80, 90, 40, 70];

  // // 分割代入
  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // 値の交換
  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
}
