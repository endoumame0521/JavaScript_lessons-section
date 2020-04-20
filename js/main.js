// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';


{
  // クラスの定義
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    // メソッド
    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }
  }

  const posts = [
    // インスタンスの生成
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミング楽しい！'),
  ];

  posts[0].show();
  posts[1].show();
}
