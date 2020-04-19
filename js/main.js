// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100,
    y: 180,
    ...otherProps, // オブジェクトのスプレッド構文
  };

  // console.log(point);

  // オブジェクトの分割代入
  const {x, r, ...others} = point;

  console.log(x);
  console.log(r);
  console.log(others);
}
