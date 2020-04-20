// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const d = [2019, 11, 14];

  // console.log(d.join('/'));
  // console.log(d.join(''));

  const t = '17:08:24';
  // console.log(t.split(':'));

  const [hour, minite, second] = t.split(':');
  console.log(hour);
  console.log(minite);
  console.log(second);
}
