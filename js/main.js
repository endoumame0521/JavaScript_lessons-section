// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

// カプセル化
{
  // クラスの定義
  class Post { // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    // メソッド
    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++
      this.show();
    }
  }

  // 親クラス（Post）を継承
  class SponsoredPost extends Post { // 子クラス
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }
    // メソッド
    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }

  const posts = [
    // インスタンスの生成
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('2分どうがでマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}
