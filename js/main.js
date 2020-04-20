// 厳密なエラーを発見するもの。とりあえず書いておく。
'use strict';

// カプセル化
{
  // クラスの定義
  class SponsoredPost {
    constructor(text, sponsor) {
      this.text = text;
      this.likeCount = 0;
      this.sponsor = sponsor;
    }

    // メソッド
    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
      console.log(`...sponsored by ${this.sponsor}`);
    }

    like() {
      this.likeCount++
      this.show();
    }

  }

  // クラスの定義
  class Post {
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

  const posts = [
    // インスタンスの生成
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('2分どうがでマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}
