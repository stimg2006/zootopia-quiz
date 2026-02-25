const quizData = [
    {
        question: "<ruby>この<rt></rt></ruby> <ruby>キャラクターの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["ジュディ・ホップス", "ニック・ワイルド", "フィニック", "<ruby>ボゴ<rt></rt></ruby><ruby>署長<rt>しょちょう</rt></ruby>", "ベルウェザー", "クロウハウザー"],
        correct: 0,
        image: ["pics/ホップス.exif", "pics/ホップス２.exif"]
    },
    {
        question: "<ruby>事件<rt>じけん</rt></ruby><ruby>を<rt></rt></ruby> <ruby>解決<rt>かいけつ</rt></ruby><ruby>する、キツネの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["ニック・ワイルド", "フィニック", "クロウハウザー", "フラッシュ", "ギデオン・グレー", "デューク"],
        correct: 0,
        image: ["pics/ワイルド.exif", "pics/ワイルド２.exif"]
    },
    {
        question: "<ruby>ズートピア<rt></rt></ruby><ruby>警察<rt>けいさつ</rt></ruby><ruby>の、こわい<rt></rt></ruby> <ruby>署長<rt>しょちょう</rt></ruby><ruby>さんは？<rt></rt></ruby>",
        choices: ["<ruby>ボゴ<rt></rt></ruby>", "<ruby>スチュー<rt></rt></ruby>", "<ruby>ニック<rt></rt></ruby>", "<ruby>フラッシュ<rt></rt></ruby>", "<ruby>ライオンハート<rt></rt></ruby>", "<ruby>ヤックス<rt></rt></ruby>"],
        correct: 0,
        image: ["pics/ボゴ.exif", "pics/ボゴ２.exif"]
    },
    {
        question: "ドーナツが <ruby>大好き<rt>だいすき</rt></ruby>な、<ruby>警察署<rt>けいさつしょ</rt></ruby>の <ruby>受付<rt>うけつけ</rt></ruby>の チーターは？",
        choices: ["クロウハウザー", "ライオンハート", "マンチャス", "ギデオン", "ボゴ", "ニック"],
        correct: 0,
        image: ["pics/クロウハウザー.exif", "pics/クロウハウザー2.exif"]
    },
    {
        question: "ズートピアの <ruby>市長<rt>しちょう</rt></ruby>さん。ライオンの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["レオドア・ライオンハート", "<ruby>ボゴ<rt></rt></ruby><ruby>署長<rt>しょちょう</rt></ruby>", "スチュー", "ヤックス", "デューク", "フィニック"],
        correct: 0,
        image: ["pics/ライオンハート市長.exif", "pics/ライオンハート市長２.exif"]
    },
    {
        question: "ひつじの <ruby>副市長<rt>ふくしちょう</rt></ruby>さんの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ベルウェザー", "ボン・ホップス", "ガゼル", "ナギ", "プリシラ", "フルー・フルー"],
        correct: 0,
        image: ["pics/ベルウェザー.exif", "pics/ベルウェザー２.exif"]
    },
    {
        question: "ジュディの おかあさんの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ボニー", "ベルウェザー", "プリシラ", "フルー・フルー", "ガゼル", "オッタートン<ruby>夫人<rt>ふじん</rt></ruby>"],
        correct: 0,
        image: "pics/ボニー・ホップス.png"
    },
    {
        question: "ジュディの おとうさんの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["スチュー", "ニック", "ボゴ", "フラッシュ", "ギデオン", "エミット"],
        correct: 0,
        image: "pics/スチュー・ホップス.png"
    },
    {
        question: "「だんなさんが いなくなったの」と <ruby>相談<rt>そうだん</rt></ruby>にきた カワウソさんは？",
        choices: ["オッタートン<ruby>夫人<rt>ふじん</rt></ruby>", "ガゼル", "ジュディ", "プリシラ", "フルー・フルー", "ボニー"],
        correct: 0,
        image: "pics/オッタートンふじん.exif"
    },
    {
        question: "いなくなった カワウソの おとうさんの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["エミット", "ニック", "スチュー", "フィニック", "マンチャス", "ボゴ"],
        correct: 0,
        image: ["pics/エミット・オッタートン.exif", "pics/エミット・オッタートン２.jpg"]
    },
    {
        question: "<ruby>事件<rt>じけん</rt></ruby>の ことを <ruby>知<rt>し</rt></ruby>っていた、ジャガーの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["マンチャス", "ボゴ", "ヤックス", "デューク", "ニック", "フィニック"],
        correct: 0,
        image: ["pics/マンチャス.webp", "pics/マンチャス２.jpg"]
    },
    {
        question: "ニックと いっしょに アイスを <ruby>売<rt>う</rt></ruby>っていた、ちいさな フェネックは？",
        choices: ["フィニック", "フラッシュ", "ミスター・ビッグ", "デューク", "ギデオン", "クロウハウザー"],
        correct: 0,
        image: ["pics/フィニック.exif", "pics/フィニック２.exif", "pics/フィニック３.exif"]
    },
    {
        question: "のんびりやさんの なまけもの。<ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["フラッシュ", "ニック", "ボゴ", "ガゼル", "ヤックス", "スチュー"],
        correct: 0,
        image: "pics/フラッシュ.exif"
    },
    {
        question: "フラッシュと いっしょに <ruby>働<rt>はたら</rt></ruby>いている なまけものの おんなのこは？",
        choices: ["プリシラ", "フルー・フルー", "ガゼル", "ナギ", "ジュディ", "ベルウェザー"],
        correct: 0,
        image: ["pics/プリシラ.exif", "pics/プリシラ２.exif"]
    },
    {
        question: "とっても こわい、ネズミの ボス。<ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ミスター・ビッグ", "ミセス・オッタートン", "フルー・フルー", "ガゼル", "ボゴ<ruby>署長<rt>しょちょう</rt></ruby>", "ライオンハート"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "ミスター・ビッグの むすめさんの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["フルー・フルー", "ジュディ", "ベルウェザー", "ガゼル", "プリシラ", "ボニー"],
        correct: 0,
        image: "pics/フルー・フルー.exif"
    },
    {
        question: "ナチュリストクラブにいる、ヤクの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ヤックス", "マンチャス", "ボゴ", "ニック", "フィニック", "フラッシュ"],
        correct: 0,
        image: ["pics/ヤックス.exif", "pics/ヤックス２.exif"]
    },
    {
        question: "ドロボウを していた、イタチの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["デューク・ウィーゼルトン", "ニック・ワイルド", "フィニック", "フラッシュ", "ギデオン", "マンチャス"],
        correct: 0,
        image: ["pics/デューク・ウィーゼルトン.exif", "pics/デューク・ウィーゼルトン２.exif"]
    },
    {
        question: "ズートピアの <ruby>大人気<rt>だいにんき</rt></ruby> <ruby>歌手<rt>かしゅ</rt></ruby>。<ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ガゼル", "ベルウェザー", "フラッシュ", "ジュディ", "プリシラ", "フルー・フルー"],
        correct: 0,
        image: ["pics/ガゼル.exif", "pics/ガゼル２.exif"]
    },
    {
        question: "ニュースを <ruby>伝<rt>つた</rt></ruby>える、トナカイの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ピーター・ムースブリッジ", "ニック", "ボゴ", "ライオンハート", "ヤックス", "フラッシュ"],
        correct: 0,
        image: "pics/ピーター・ムースブリッジ.webp"
    },
    {
        question: "こどものころ ジュディを いじめていたけれど、おとなになって なかよくなった キツネは？",
        choices: ["ギデオン・グレー", "ニック・ワイルド", "フィニック", "ボゴ", "デューク", "ライオンハート"],
        correct: 0,
        image: ["pics/ギディオン・グレー.exif", "pics/ギディオン・グレー２.exif"]
    },
    {
        question: "しゅじんこうの ジュディは、なんの <ruby>動物<rt>どうぶつ</rt></ruby>？",
        choices: ["ウサギ", "キツネ", "ヒツジ", "チーター", "ナマケモノ", "ライオン"],
        correct: 0,
        image: ["pics/ホップス.exif", "pics/ホップス２.exif"]
    },
    {
        question: "ニックは、なんの <ruby>動物<rt>どうぶつ</rt></ruby>？",
        choices: ["キツネ", "オオカミ", "トラ", "ラクダ", "ヒョウ", "ウマ"],
        correct: 0,
        image: ["pics/ワイルド.exif", "pics/ワイルド２.exif"]
    },
    {
        question: "<ruby>ニックが<rt></rt></ruby> <ruby>ジュディを<rt></rt></ruby> <ruby>よぶときに<rt></rt></ruby> <ruby>つかう、やさいの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>ニンジン<rt></rt></ruby>", "<ruby>タマネギ<rt></rt></ruby>", "<ruby>ピーマン<rt></rt></ruby>", "<ruby>ジャガイモ<rt></rt></ruby>", "<ruby>ナス<rt></rt></ruby>", "<ruby>キュウリ<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "<ruby>ベルウェザー<rt></rt></ruby> <ruby>副市長<rt>ふくしちょう</rt></ruby><ruby>は、なんの<rt></rt></ruby> <ruby>動物<rt>どうぶつ</rt></ruby><ruby>？<rt></rt></ruby>",
        choices: ["<ruby>ヒツジ<rt></rt></ruby>", "<ruby>ヤギ<rt></rt></ruby>", "<ruby>ウシ<rt></rt></ruby>", "<ruby>ウマ<rt></rt></ruby>", "<ruby>シカ<rt></rt></ruby>", "<ruby>ラクダ<rt></rt></ruby>"],
        correct: 0,
        image: ["pics/ベルウェザー.exif", "pics/ベルウェザー２.exif"]
    },
    {
        question: "<ruby>動物<rt>どうぶつ</rt></ruby><ruby>たちを<rt></rt></ruby> <ruby>おこらせてしまう、こわい<rt></rt></ruby> <ruby>おはなの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>よるのとおぼえ<rt></rt></ruby>", "<ruby>あかりの<rt></rt></ruby> <ruby>はな<rt></rt></ruby>", "<ruby>ねむりの<rt></rt></ruby> <ruby>くさ<rt></rt></ruby>", "<ruby>どくの<rt></rt></ruby> <ruby>み<rt></rt></ruby>", "<ruby>ひかりの<rt></rt></ruby> <ruby>つぼみ<rt></rt></ruby>", "<ruby>まほうの<rt></rt></ruby> <ruby>えだ<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "<ruby>受付<rt>うけつけ</rt></ruby>の クロウハウザーは、なんの <ruby>動物<rt>どうぶつ</rt></ruby>？",
        choices: ["チーター", "ライオン", "ヒョウ", "クマ", "トラ", "オオカミ"],
        correct: 0,
        image: ["pics/クロウハウザー.exif", "pics/クロウハウザー2.exif"]
    },
    {
        question: "<ruby>めんきょせんたーで<rt></rt></ruby> <ruby>働<rt>はたら</rt></ruby><ruby>く<rt></rt></ruby> <ruby>フラッシュは、なんの<rt></rt></ruby> <ruby>動物<rt>どうぶつ</rt></ruby><ruby>？<rt></rt></ruby>",
        choices: ["<ruby>ナマケモノ<rt></rt></ruby>", "<ruby>カメ<rt></rt></ruby>", "<ruby>ゾウ<rt></rt></ruby>", "<ruby>カバ<rt></rt></ruby>", "<ruby>サイ<rt></rt></ruby>", "<ruby>ワニ<rt></rt></ruby>"],
        correct: 0,
        image: "pics/フラッシュ.exif"
    },
    {
        question: "<ruby>ミスター・ビッグは、どこの<rt></rt></ruby> <ruby>まちの<rt></rt></ruby> <ruby>ボス？<rt></rt></ruby>",
        choices: ["<ruby>ツンドラタウン<rt></rt></ruby>", "<ruby>サハラ・スクエア<rt></rt></ruby>", "<ruby>レインフォレスト<rt></rt></ruby>", "<ruby>ダウンタウン<rt></rt></ruby>", "<ruby>サバンナ・セントラル<rt></rt></ruby>", "<ruby>バニーバロウ<rt></rt></ruby>"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "とっても ちいさな ミスター・ビッグは、なんの <ruby>動物<rt>どうぶつ</rt></ruby>？",
        choices: ["トガリネズミ", "ハムスター", "リス", "モグラ", "ネズミ", "ウサギ"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "<ruby>ズートピアの<rt></rt></ruby> <ruby>主題歌<rt>しゅだいか</rt></ruby><ruby>（うた）の<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>トライ・エヴリシング<rt></rt></ruby>", "<ruby>ハッピー・ソング<rt></rt></ruby>", "<ruby>ズートピア・マーチ<rt></rt></ruby>", "<ruby>あしたへ<rt></rt></ruby> <ruby>ジャンプ<rt></rt></ruby>", "<ruby>みんなで<rt></rt></ruby> <ruby>あそぼう<rt></rt></ruby>", "<ruby>きらきら<rt></rt></ruby> <ruby>スマイル<rt></rt></ruby>"],
        correct: 0,
        image: ["pics/ガゼル.exif", "pics/ガゼル２.exif"]
    },
    {
        question: "<ruby>ジュディが<rt></rt></ruby> <ruby>おとうさんたちから<rt></rt></ruby> <ruby>よばれている<rt></rt></ruby> <ruby>あだなは？<rt></rt></ruby>",
        choices: ["<ruby>ジュージュア<rt></rt></ruby>", "<ruby>ジュディ<rt></rt></ruby>", "<ruby>ピョンピョン<rt></rt></ruby>", "<ruby>ウサチャン<rt></rt></ruby>", "<ruby>ジューチャン<rt></rt></ruby>", "<ruby>ピョンコ<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "ジュディは、なんにん <ruby>兄弟<rt>きょうだい</rt></ruby>？",
        choices: ["275ひき", "10ひき", "50ひき", "100ひき", "200ひき", "500ひき"],
        correct: 0
    },
    {
        question: "<ruby>2025ねんに<rt></rt></ruby> <ruby>公開<rt>こうかい</rt></ruby><ruby>される「ズートピア２」。なぞの<rt></rt></ruby> <ruby>へびの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>ゲイリー<rt></rt></ruby>", "<ruby>パウバート<rt></rt></ruby>", "<ruby>ニブルズ<rt></rt></ruby>", "<ruby>ヘイスース<rt></rt></ruby>", "<ruby>ゼブロ<rt></rt></ruby>", "<ruby>ニック<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "ズートピア２で、ジュディのファンだといって <ruby>捜査<rt>そうさ</rt></ruby>を てつだってくれる、オオヤマネコは？",
        choices: ["パウバート", "ゲイリー", "ニブルズ", "ニック", "フィニック", "ボゴ"],
        correct: 0
    },
    {
        question: "ズートピア２は、なんねんの <ruby>冬<rt>ふゆ</rt></ruby>に <ruby>公開<rt>こうかい</rt></ruby>されるかな？",
        choices: ["2025ねん", "2024ねん", "2026ねん", "2030ねん", "2035ねん", "2040ねん"],
        correct: 0
    },
    {
        question: "<ruby>ズートピア２で、ズートピアの<rt></rt></ruby> <ruby>なぞについて<rt></rt></ruby> <ruby>はなしている<rt></rt></ruby> <ruby>ビーバーの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>ニブルズ<rt></rt></ruby>", "<ruby>ボニー<rt></rt></ruby>", "<ruby>スチュー<rt></rt></ruby>", "<ruby>フラッシュ<rt></rt></ruby>", "<ruby>ヤックス<rt></rt></ruby>", "<ruby>ガゼル<rt></rt></ruby>"],
        correct: 0,
        image: "pics/ニブルズ.jpg"
    },
    {
        question: "<ruby>ジュディが<rt></rt></ruby> <ruby>警察署<rt>けいさつしょ</rt></ruby><ruby>で<rt></rt></ruby> <ruby>最初<rt>さいしょ</rt></ruby><ruby>に<rt></rt></ruby> <ruby>まかされた<rt></rt></ruby> <ruby>おしごとは？<rt></rt></ruby>",
        choices: ["<ruby>駐車<rt>ちゅうしゃ</rt></ruby> <ruby>違反<rt>いはん</rt></ruby><ruby>の<rt></rt></ruby> <ruby>とりしまり<rt></rt></ruby>", "<ruby>ドロボウつかまえ<rt></rt></ruby>", "<ruby>迷子<rt>まいご</rt></ruby><ruby>さがし<rt></rt></ruby>", "<ruby>交通整理<rt>こうつうせいり</rt></ruby>", "<ruby>おそうじ<rt></rt></ruby>", "<ruby>パトロール<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "<ruby>ニックが<rt></rt></ruby> <ruby>大好<rt>だいす</rt></ruby><ruby>きな、あかい<rt></rt></ruby> <ruby>肉球<rt>にくきゅう</rt></ruby><ruby>の<rt></rt></ruby> <ruby>かたちをした<rt></rt></ruby> <ruby>アイスの<rt></rt></ruby> <ruby>名前<rt>なまえ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>パウシクル（Pawpsicle）<rt></rt></ruby>", "<ruby>ドーナツ・アイス<rt></rt></ruby>", "<ruby>キツネ・アイス<rt></rt></ruby>", "<ruby>ズートピア・アイス<rt></rt></ruby>", "<ruby>ニンジン・アイス<rt></rt></ruby>", "<ruby>ペロペロキャンディー<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "ニックが こどものころに はいりたかった、チームの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ジュニア・レンジャー・スカウト", "<ruby>警察隊<rt>けいさつたい</rt></ruby>", "アイスクリームやさん", "サッカーチーム", "<ruby>探検隊<rt>たんけんたい</rt></ruby>", "ヒーロークラブ"],
        correct: 0
    },
    {
        question: "ズートピア２で、ニックと ジュディが はじめて <ruby>調査<rt>ちょうさ</rt></ruby>に <ruby>行<rt>い</rt></ruby>く、みずべの <ruby>町<rt>まち</rt></ruby>は？",
        choices: ["マシュラン（Marshlands）", "サハラ・スクエア", "ツンドラ・タウン", "レインフォレスト", "サバンナ・セントラル", "ダウンタウン"],
        correct: 0
    },
    {
        question: "ズートピア２で、<ruby>事件<rt>じけん</rt></ruby>の カギを にぎる、<ruby>今<rt>いま</rt></ruby>まで ズートピアに いなかった <ruby>動物<rt>どうぶつ</rt></ruby>たちは？",
        choices: ["<ruby>爬虫類<rt>はちゅうるい</rt></ruby>（へびや とかげ）", "<ruby>鳥<rt>とり</rt></ruby>（タカや スズメ）", "<ruby>魚<rt>さかな</rt></ruby>", "<ruby>虫<rt>むし</rt></ruby>", "おばけ", "うちゅうじん"],
        correct: 0
    },
    {
        question: "よこくへんで、ニックと ジュディが ゲイリーを つかまえるために のっていた <ruby>乗<rt>の</rt></ruby>りものは？",
        choices: ["ボート", "パトカー", "ヘリコプター", "スケートボード", "<ruby>自転車<rt>じてんしゃ</rt></ruby>", "<ruby>気球<rt>ききゅう</rt></ruby>"],
        correct: 0
    },
    {
        question: "<ruby>ズートピア２で、ニックの<rt></rt></ruby> <ruby>警察官<rt>けいさつかん</rt></ruby><ruby>としての<rt></rt></ruby> <ruby>ランク（かいきゅう）は？<rt></rt></ruby>",
        choices: ["<ruby>ジュディと<rt></rt></ruby> <ruby>おなじ<rt></rt></ruby> <ruby>あいぼう<rt></rt></ruby>", "<ruby>ジュディの<rt></rt></ruby> <ruby>上司<rt>じょうし</rt></ruby>", "<ruby>まだ<rt></rt></ruby> <ruby>見習<rt>みなら</rt></ruby><ruby>い<rt></rt></ruby>", "<ruby>署長<rt>しょちょう</rt></ruby>", "<ruby>えらーい<rt></rt></ruby> <ruby>ひと<rt></rt></ruby>", "<ruby>てつだい<rt></rt></ruby>"],
        correct: 0
    },
    {
        question: "ズートピア２に でてくる へびの ゲイリー。<ruby>足<rt>あし</rt></ruby>は あるかな？",
        choices: ["<ruby>足<rt>あし</rt></ruby>は ない（へびだから）", "４ほん ある", "２ほん ある", "１００ぽん ある", "たくさん ある", "みじかいのが ある"],
        correct: 0
    },
    {
        question: "ズートピア２で ジュディのファンだと言っている、ビーバーの ニブルズ。<ruby>何<rt>なに</rt></ruby>を してる <ruby>人<rt>ひと</rt></ruby>？",
        choices: ["<ruby>配信者<rt>はいしんしゃ</rt></ruby>", "<ruby>洋服屋<rt>ようふくや</rt></ruby><ruby>さん<rt></rt></ruby>", "<ruby>町<rt>まち</rt></ruby><ruby>の<rt></rt></ruby><ruby>支配人<rt>しはいにん</rt></ruby>", "<ruby>警察官<rt>けいさつかん</rt></ruby>", "<ruby>医者<rt>いしゃ</rt></ruby>", "<ruby>先生<rt>せんせい</rt></ruby>"],
        correct: 0,
        image: "pics/ニブルズ.jpg"
    },
    {
        question: "ズートピア２に でてくる、この<ruby>子<rt>こ</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>？",
        choices: ["ヘイスース", "ポニースル", "カナ", "ピピン", "ニコ", "ルル"],
        correct: 0,
        image: "pics/ヘイスース.jpg"
    },
    {
        question: "ズートピア２に でてくる、ゼブロ・ゼブラクストンの <ruby>口癖<rt>くちぐせ</rt></ruby><ruby>は<rt></rt></ruby> <ruby>何<rt>なに</rt></ruby><ruby>？<rt></rt></ruby>",
        choices: ["シマってこう！", "ウマをあわせていこう！", "<ruby>大丈<rt>だいじょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>！", "よろしくね！", "おはよー！", "がんばろう！"],
        correct: 0,
        image: "pics/ゼブロ・ゼブラクストン.jpg"
    },
    {
        question: "<ruby>ひそかに「よるの<rt></rt></ruby> <ruby>とおぼえ」の<rt></rt></ruby> <ruby>弾丸<rt>だんがん</rt></ruby><ruby>を<rt></rt></ruby> <ruby>作<rt>つく</rt></ruby><ruby>っていた、ヒツジの<rt></rt></ruby> <ruby>科学者<rt>かがくしゃ</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>ダグ<rt></rt></ruby>", "<ruby>ベルウェザー<rt></rt></ruby>", "<ruby>デューク<rt></rt></ruby>", "<ruby>フィニック<rt></rt></ruby>", "<ruby>ニック<rt></rt></ruby>", "<ruby>ボゴ<rt></rt></ruby>"],
        correct: 0,
        image: ["pics/ダグ.exif", "pics/ダグ２.exif"]
    },
    {
        question: "ナチュリストクラブにいる、ゾウの おんなのこの <ruby>名前<rt>なまえ</rt></ruby>は？",
        choices: ["ナンギ", "フルー・フルー", "ガゼル", "プリシラ", "ボニー", "ナギ"],
        correct: 0,
        image: ["pics/ナンギ.exif", "pics/ナンギ２.exif"]
    },
    {
        question: "ゾウ<ruby>専用<rt>せんよう</rt></ruby>の アイスクリームショップの <ruby>店主<rt>てんしゅ</rt></ruby>さんは？",
        choices: ["ジェリー・ジャンブー・ジュニア", "ニック", "ボゴ", "フラッシュ", "ギデオン", "エミット"],
        correct: 0,
        image: "pics/ジェリー・ジャンブー・ジュニア.exif"
    },
    {
        question: "<ruby>ズートピア<rt></rt></ruby><ruby>警察署<rt>けいさつしょ</rt></ruby><ruby>の、ガッシリした<rt></rt></ruby> <ruby>サイの<rt></rt></ruby> <ruby>警察官<rt>けいさつかん</rt></ruby><ruby>は？<rt></rt></ruby>",
        choices: ["<ruby>マックホーン<rt></rt></ruby>", "<ruby>ボゴ<rt></rt></ruby>", "<ruby>ニック<rt></rt></ruby>", "<ruby>クロウハウザー<rt></rt></ruby>", "<ruby>ライオンハート<rt></rt></ruby>", "<ruby>マンチャス<rt></rt></ruby>"],
        correct: 0,
        image: "pics/マックホーン.exif"
    }
];

let currentQuestion = 0;
let score = 0;
let wrongScore = 0;
let shuffledQuiz = [];
let currentChoices = [];

const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const imageContainer = document.getElementById("image-container");
const choicesBtns = [
    document.getElementById("choice1"),
    document.getElementById("choice2"),
    document.getElementById("choice3"),
    document.getElementById("choice4")
];
const scoreDisplay = document.getElementById("score");
const wrongScoreDisplay = document.getElementById("wrong-score");
const scoreBoard = document.getElementById("score-board");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const finalScoreText = document.getElementById("final-score");
const feedbackOverlay = document.getElementById("feedback-overlay");
const feedbackIcon = document.getElementById("feedback-icon");
const seCorrect = document.getElementById("se-correct");
const seWrong = document.getElementById("se-wrong");
const sePerfect = document.getElementById("se-perfect");
const seStart = document.getElementById("se-start");
const seTimer = document.getElementById("se-timer");
const hanamaruContainer = document.getElementById("hanamaru-container");
const resultMessage = document.getElementById("result-message");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    currentQuestion = 0;
    score = 0;
    wrongScore = 0;

    // History-based selection logic
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    let allIndices = Array.from({ length: quizData.length }, (_, i) => i);

    // Find questions NOT in the recent history
    let available = allIndices.filter(index => !history.includes(index));

    // If we have fewer than 10 available, clear history or shuffle the remainder
    if (available.length < 10) {
        history = []; // Reset history if we've seen almost everything
        available = allIndices;
    }

    // Randomly pick 10 from available questions
    shuffle(available);
    let selectedIndices = available.slice(0, 10);

    // Update history: Add new ones and keep only the last 25 to avoid repeats "for a while"
    history = [...history, ...selectedIndices];
    if (history.length > 25) {
        history = history.slice(-25);
    }
    localStorage.setItem('quizHistory', JSON.stringify(history));

    shuffledQuiz = selectedIndices.map(i => quizData[i]);

    document.getElementById("start-screen").classList.add("hidden");
    hanamaruContainer.classList.add("hidden");
    document.getElementById("fireworks-container").innerHTML = "";

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");
    // Initial score update
    updateScore();
    showQuestion();
}

// Sound stopping helper
function stopQuizSounds() {
    if (seStart) {
        seStart.pause();
        seStart.currentTime = 0;
    }
    if (seTimer) {
        seTimer.pause();
        seTimer.currentTime = 0;
    }
}

function showQuestion() {
    const q = shuffledQuiz[currentQuestion];

    // Play start sound immediately
    if (seStart) seStart.play().catch(e => console.log("Start audio failed:", e));

    // Play timer after 1 second
    setTimeout(() => {
        // Only play if we haven't answered yet (check if quizScreen is still active and no highlight added)
        const firstBtn = choicesBtns[0];
        if (firstBtn && !firstBtn.classList.contains("correct-highlight") && !firstBtn.classList.contains("wrong-highlight")) {
            if (seTimer) seTimer.play().catch(e => console.log("Timer audio failed:", e));
        }
    }, 1000);

    // Split into two lines: prioritize '。', then '、'
    let displayQuestion = q.question;
    let splitIndex = q.question.indexOf('。');
    if (splitIndex === -1) {
        splitIndex = q.question.indexOf('、');
    }

    if (splitIndex !== -1 && splitIndex < q.question.length - 1) {
        displayQuestion = q.question.slice(0, splitIndex + 1) + "<br>" + q.question.slice(splitIndex + 1).trim();
    }
    questionText.innerHTML = displayQuestion;

    if (q.image) {
        let imageSrc = "";
        if (Array.isArray(q.image)) {
            imageSrc = q.image[Math.floor(Math.random() * q.image.length)];
        } else {
            imageSrc = q.image;
        }
        questionImage.src = imageSrc;
        imageContainer.classList.remove("hidden");
    } else {
        imageContainer.classList.add("hidden");
    }

    // Dynamic distractor generation per question
    // Correct answer is fixed at q.choices[0] after our recent normalization
    const correctAnswerText = q.choices[0];
    let potentialDistractors = q.choices.slice(1);
    shuffle(potentialDistractors);
    let selectedDistractors = potentialDistractors.slice(0, 3);

    // Combine into choice objects
    currentChoices = [
        { text: correctAnswerText, isCorrect: true },
        ...selectedDistractors.map(d => ({ text: d, isCorrect: false }))
    ];

    // Shuffle the final 4 choices for placement randomization
    shuffle(currentChoices);

    // Update buttons with shuffled choices
    currentChoices.forEach((choiceObj, index) => {
        choicesBtns[index].innerHTML = choiceObj.text;
        choicesBtns[index].classList.remove("correct-highlight", "wrong-highlight");
    });
}

function updateScore() {
    scoreDisplay.innerText = score;
    wrongScoreDisplay.innerText = wrongScore;
}

function checkAnswer(index) {
    stopQuizSounds();
    const isCorrect = currentChoices[index].isCorrect;
    if (isCorrect) {
        score++;
        updateScore();
        choicesBtns[index].classList.add("correct-highlight");
        if (seCorrect) seCorrect.play().catch(e => console.log("Audio play failed:", e));
    } else {
        wrongScore++;
        updateScore();
        choicesBtns[index].classList.add("wrong-highlight");
        const correctIndex = currentChoices.findIndex(c => c.isCorrect);
        choicesBtns[correctIndex].classList.add("correct-highlight");
        if (seWrong) seWrong.play().catch(e => console.log("Audio play failed:", e));
    }
    showFeedback(isCorrect);
    currentQuestion++;
    setTimeout(() => {
        if (currentQuestion < shuffledQuiz.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2500);
}

function showFeedback(isCorrect) {
    feedbackIcon.innerText = isCorrect ? "⭕" : "❌";
    feedbackIcon.style.color = isCorrect ? "#ef4444" : "#3b82f6";
    feedbackOverlay.classList.add("show");
    feedbackOverlay.classList.remove("hidden");
    setTimeout(() => {
        feedbackOverlay.classList.remove("show");
        feedbackOverlay.classList.add("hidden");
    }, 800);
}

function showResult() {
    // Re-fetch to be safe
    const resultScreen = document.getElementById("result-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const scoreBoard = document.getElementById("score-board");
    const finalScoreText = document.getElementById("final-score");
    const resultMessage = document.getElementById("result-message");
    const hanamaruContainer = document.getElementById("hanamaru-container");

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreBoard.classList.add("hidden");

    const totalQ = shuffledQuiz.length || 10;
    const finalScoreLabel = `${totalQ}てん ちゅう ${score}てん だったよ！`;
    if (finalScoreText) finalScoreText.innerText = finalScoreLabel;

    if (score === totalQ) {
        const sePerfect = document.getElementById("se-perfect");
        if (sePerfect) sePerfect.play().catch(e => console.log("Audio play failed:", e));
        if (resultMessage) resultMessage.innerHTML = `すごい！ <ruby>全問正解<rt>ぜんもんせいかい</rt></ruby>！<br>きみは ズートピア・マスターだ！`;
        if (hanamaruContainer) hanamaruContainer.classList.remove("hidden");
        if (typeof confetti !== 'undefined') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else if (score >= 7) {
        if (resultMessage) resultMessage.innerHTML = `よく がんばったね！<br>あと <ruby>少<rt>すこ</rt></ruby>しで <ruby>満点<rt>まんてん</rt></ruby>だ！`;
    } else {
        if (resultMessage) resultMessage.innerHTML = `おつかれさま！<br>もう <ruby>一回<rt>いっかい</rt></ruby> <ruby>挑戦<rt>ちょうせん</rt></ruby>してみよう！`;
    }

    saveAndShowHistory();
}

function saveAndShowHistory() {
    const historyList = document.getElementById("history-list");
    if (!historyList) return;

    let scores = [];
    try {
        scores = JSON.parse(localStorage.getItem('quizScoreHistory') || '[]');
    } catch (e) {
        console.error("History parse failed", e);
        scores = [];
    }

    // Add current score with date
    const now = new Date();
    const mm = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    const dateStr = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${mm}`;

    const totalQ = shuffledQuiz.length || 10;
    scores.unshift({ date: dateStr, score: score, total: totalQ });

    // Keep only last 5
    scores = scores.slice(0, 5);
    try {
        localStorage.setItem('quizScoreHistory', JSON.stringify(scores));
    } catch (e) {
        console.error("History save failed", e);
    }

    // Display
    historyList.innerHTML = scores.map(item => `
        <li>
            <span>${item.date}</span>
            <span>${item.total}<ruby>問<rt>もん</rt></ruby> <ruby>中<rt>ちゅう</rt></ruby> ${item.score}<ruby>点<rt>てん</rt></ruby></span>
        </li>
    `).join('');
}

function triggerFireworks() {
    const container = document.getElementById("fireworks-container");
    container.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * 80 + 10; // 10% to 90%
            const y = Math.random() * 50 + 10; // 10% to 60%
            createFirework(x, y);
        }, i * 400);
    }
}

function createFirework(x, y) {
    const container = document.getElementById("fireworks-container");
    const colors = ["#ff0000", "#ffa500", "#ffff00", "#00ff00", "#0000ff", "#ee82ee"];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "firework";
        const angle = (i * 360) / particleCount;
        const distance = 100 + Math.random() * 50;
        const tx = Math.cos(angle * Math.PI / 180) * distance;
        const ty = Math.sin(angle * Math.PI / 180) * distance;

        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = x + "%";
        particle.style.top = y + "%";
        particle.style.setProperty("--tx", `${tx}px`);
        particle.style.setProperty("--ty", `${ty}px`);

        container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => particle.remove(), 1500);
    }
}

// ページ読み込み時に自動で始めない（スタートボタンを待つ）
