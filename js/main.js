// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

{
  const d = new Date(2019, 10);
  d.setHours(10, 20, 30);
  d.setDate(31);
  d.setDate(d.getDate() + 3);
  console.log(d);
}
