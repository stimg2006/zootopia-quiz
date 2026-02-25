const quizData = [
    {
        question: "「だれでも なんでもなれる！」が くちぐせ。ズートピアで はじめての「ウサギの 警察官（けいさつかん）」になった この子（こ）の 名前（なまえ）は？",
        choices: ["ジュディ・ホップス", "ニック・ワイルド", "フィニック", "ボゴ署長（しょちょう）", "ベルウェザー", "クロウハウザー"],
        correct: 0,
        image: ["pics/ホップス.exif", "pics/ホップス２.exif"]
    },
    {
        question: "むかしは アイスを 売（う）る サギ師（し） だったけれど、ジュディと 一緒（いっしょ）に ズートピア初（はつ）の「キツネの 警察官（けいさつかん）」になったのは だーれだ？",
        choices: ["ニック・ワイルド", "フィニック", "クロウハウザー", "フラッシュ", "ギデオン・グレー", "デューク"],
        correct: 0,
        image: ["pics/ワイルド.exif", "pics/ワイルド２.exif"]
    },
    {
        question: "ズートピア警察（けいさつ）の、こわい 署長（しょちょう）さんは？",
        choices: ["ボゴ", "スチュー", "ニック", "フラッシュ", "ライオンハート", "ヤックス"],
        correct: 0,
        image: ["pics/ボゴ.exif", "pics/ボゴ２.exif"]
    },
    {
        question: "ドーナツが 大好き（だいすき）な、警察署（けいさつしょ）の 受付（うけつけ）の チーターは？",
        choices: ["クロウハウザー", "ライオンハート", "マンチャス", "ギデオン", "ボゴ", "ニック"],
        correct: 0,
        image: ["pics/クロウハウザー.exif", "pics/クロウハウザー2.exif"]
    },
    {
        question: "ズートピアの 市長（しちょう）さん。ライオンの 名前（なまえ）は？",
        choices: ["レオドア・ライオンハート", "ボゴ署長（しょちょう）", "スチュー", "ヤックス", "デューク", "フィニック"],
        correct: 0,
        image: ["pics/ライオンハート市長.exif", "pics/ライオンハート市長２.exif"]
    },
    {
        question: "ひつじの 副市長（ふくしちょう）さんの 名前（なまえ）は？",
        choices: ["ベルウェザー", "ボン・ホップス", "ガゼル", "ナギ", "プリシラ", "フルー・フルー"],
        correct: 0,
        image: ["pics/ベルウェザー.exif", "pics/ベルウェザー２.exif"]
    },
    {
        question: "ジュディの おかあさんの 名前（なまえ）は？",
        choices: ["ボニー", "ベルウェザー", "プリシラ", "フルー・フルー", "ガゼル", "オッタートン夫人（ふじん）"],
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
        question: "「だんなさんが いなくなったの」と 相談（そうだん）にきた カワウソさんは？",
        choices: ["オッタートン夫人（ふじん）", "ガゼル", "ジュディ", "プリシラ", "フルー・フルー", "ボニー"],
        correct: 0,
        image: "pics/オッタートンふじん.exif"
    },
    {
        question: "いなくなった カワウソの おとうさんの 名前（なまえ）は？",
        choices: ["エミット", "ニック", "スチュー", "フィニック", "マンチャス", "ボゴ"],
        correct: 0,
        image: ["pics/エミット・オッタートン.exif", "pics/エミット・オッタートン２.jpg"]
    },
    {
        question: "事件（じけん）の ことを 知（し）っていた、ジャガーの 名前（なまえ）は？",
        choices: ["マンチャス", "ボゴ", "ヤックス", "デューク", "ニック", "フィニック"],
        correct: 0,
        image: ["pics/マンチャス.webp", "pics/マンチャス２.jpg"]
    },
    {
        question: "ニックと いっしょに アイスを 売（う）っていた、ちいさな フェネックは？",
        choices: ["フィニック", "フラッシュ", "ミスター・ビッグ", "デューク", "ギデオン", "クロウハウザー"],
        correct: 0,
        image: ["pics/フィニック.exif", "pics/フィニック２.exif", "pics/フィニック３.exif"]
    },
    {
        question: "のんびりやさんの なまけもの。名前（なまえ）は？",
        choices: ["フラッシュ", "ニック", "ボゴ", "ガゼル", "ヤックス", "スチュー"],
        correct: 0,
        image: ["pics/フラッシュ.exif", "pics/フラッシュ２.exif", "pics/フラッシュ３.exif"]
    },
    {
        question: "フラッシュと いっしょに 働（はたら）いている なまけものの おんなのこは？",
        choices: ["プリシラ", "フルー・フルー", "ガゼル", "ナギ", "ジュディ", "ベルウェザー"],
        correct: 0,
        image: ["pics/プリシラ.exif", "pics/プリシラ２.exif"]
    },
    {
        question: "とっても こわい、ネズミの ボス。名前（なまえ）は？",
        choices: ["ミスター・ビッグ", "ミセス・オッタートン", "フルー・フルー", "ガゼル", "ボゴ署長（しょちょう）", "ライオンハート"],
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
        question: "ナチュリストクラブにいる、ヤクの 名前（なまえ）は？",
        choices: ["ヤックス", "マンチャス", "ボゴ", "ニック", "フィニック", "フラッシュ"],
        correct: 0,
        image: ["pics/ヤックス.exif", "pics/ヤックス２.exif"]
    },
    {
        question: "ドロボウを していた、イタチの 名前（なまえ）は？",
        choices: ["デューク・ウィーゼルトン", "ニック・ワイルド", "フィニック", "フラッシュ", "ギデオン", "マンチャス"],
        correct: 0,
        image: ["pics/デューク・ウィーゼルトン.exif", "pics/デューク・ウィーゼルトン２.exif"]
    },
    {
        question: "ズートピアの 大人気（だいにんき） 歌手（かしゅ）。名前（なまえ）は？",
        choices: ["ガゼル", "ベルウェザー", "フラッシュ", "ジュディ", "プリシラ", "フルー・フルー"],
        correct: 0,
        image: ["pics/ガゼル.exif", "pics/ガゼル２.exif"]
    },
    {
        question: "ニュースを 伝（つた）える、トナカイの 名前（なまえ）は？",
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
        question: "ニックが ジュディを よぶときに つかう、やさいの 名前（なまえ）は？",
        choices: ["ニンジン", "タマネギ", "ピーマン", "ジャガイモ", "ナス", "キュウリ"],
        correct: 0
    },
    {
        question: "ベルウェザー 副市長（ふくしちょう）は、なんの 動物（どうぶつ）？",
        choices: ["ヒツジ", "ヤギ", "ウシ", "ウマ", "シカ", "ラクダ"],
        correct: 0,
        image: ["pics/ベルウェザー.exif", "pics/ベルウェザー２.exif"]
    },
    {
        question: "動物（どうぶつ）たちを おこらせてしまう、こわい おはなの 名前（なまえ）は？",
        choices: ["よるのとおぼえ", "あかりの はな", "ねむりの くさ", "どくの み", "ひかりの つぼみ", "まほうの えだ"],
        correct: 0
    },
    {
        question: "受付（うけつけ）の クロウハウザーは、なんの 動物（どうぶつ）？",
        choices: ["チーター", "ライオン", "ヒョウ", "クマ", "トラ", "オオカミ"],
        correct: 0,
        image: ["pics/クロウハウザー.exif", "pics/クロウハウザー2.exif"]
    },
    {
        question: "めんきょせんたーで 働（はたら）く フラッシュは、なんの 動物（どうぶつ）？",
        choices: ["ナマケモノ", "カメ", "ゾウ", "カバ", "サイ", "ワニ"],
        correct: 0,
        image: ["pics/フラッシュ.exif", "pics/フラッシュ２.exif", "pics/フラッシュ３.exif"]
    },
    {
        question: "ミスター・ビッグは、どこの まちの ボス？",
        choices: ["ツンドラタウン", "サハラ・スクエア", "レインフォレスト", "ダウンタウン", "サバンナ・セントラル", "バニーバロウ"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "とっても ちいさな ミスター・ビッグは、なんの 動物（どうぶつ）？",
        choices: ["トガリネズミ", "ハムスター", "リス", "モグラ", "ネズミ", "ウサギ"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "ズートピアの 主題歌（しゅだいか）（うた）の 名前（なまえ）は？",
        choices: ["トライ・エヴリシング", "ハッピー・ソング", "ズートピア・マーチ", "あしたへ ジャンプ", "みんなで あそぼう", "きらきら スマイル"],
        correct: 0,
        image: ["pics/ガゼル.exif", "pics/ガゼル２.exif"]
    },
    {
        question: "ジュディが おとうさんたちから よばれている あだなは？",
        choices: ["ジュージュア", "ジュディ", "ピョンピョン", "ウサチャン", "ジューチャン", "ピョンコ"],
        correct: 0
    },
    {
        question: "ジュディは、なんにん 兄弟（きょうだい）？",
        choices: ["275ひき", "10ひき", "50ひき", "100ひき", "200ひき", "500ひき"],
        correct: 0
    },
    {
        question: "2025ねんに 公開（こうかい）された「ズートピア２」。なぞの へびの 名前（なまえ）は？",
        choices: ["ゲイリー", "パウバート", "ニブルズ", "ヘイスース", "ゼブロ", "ニック"],
        correct: 0
    },
    {
        question: "ズートピア２で、ジュディのファンだといって 捜査（そうさ）を てつだってくれる、オオヤマネコは？",
        choices: ["パウバート", "ゲイリー", "ニブルズ", "ニック", "フィニック", "ボゴ"],
        correct: 0
    },
    {
        question: "ズートピア２は、なんねんの 冬（ふゆ）に 公開（こうかい）されたかな？",
        choices: ["2025ねん", "2024ねん", "2026ねん", "2030ねん", "2035ねん", "2040ねん"],
        correct: 0
    },
    {
        question: "ジュディが 警察署（けいさつしょ）で 最初（さいしょ）に まかされた おしごとは？",
        choices: ["駐車（ちゅうしゃ） 違反（いはん）の とりしまり", "ドロボウつかまえ", "迷子（まいご）さがし", "交通整理（こうつうせいり）", "おそうじ", "パトロール"],
        correct: 0
    },
    {
        question: "ニックが 大好き（だいすき）な、あかい 肉球（にくきゅう）の かたちをした アイスの 名前（なまえ）は？",
        choices: ["パウシクル（Pawpsicle）", "ドーナツ・アイス", "キツネ・アイス", "ズートピア・アイス", "ニンジン・アイス", "ペロペロキャンディー"],
        correct: 0
    },
    {
        question: "ニックが こどものころに はいりたかった、チームの 名前（なまえ）は？",
        choices: ["ジュニア・レンジャー・スカウト", "警察隊（けいさつたい）", "アイスクリームやさん", "サッカーチーム", "探検隊（たんけんたい）", "ヒーロークラブ"],
        correct: 0
    },
    {
        question: "ズートピア２で、ニックと ジュディが はじめて 調査（ちょうさ）に 行（い）く、みずべの 町（まち）は？",
        choices: ["マシュラン（Marshlands）", "サハラ・スクエア", "ツンドラ・タウン", "レインフォレスト", "サバンナ・セントラル", "ダウンタウン"],
        correct: 0
    },
    {
        question: "ズートピア２で、事件（じけん）の カギを にぎる、今（いま）まで ズートピアに いなかった 動物（どうぶつ）たちは？",
        choices: ["爬虫類（はちゅうるい）（へびや とかげ）", "鳥（とり）（タカや スズメ）", "魚（さかな）", "虫（むし）", "おばけ", "うちゅうじん"],
        correct: 0
    },
    {
        question: "よこくへんで、ニックと ジュディが ゲイリーを つかまえるために のっていた 乗り（のり）ものは？",
        choices: ["ボート", "パトカー", "ヘリコプター", "スケートボード", "自転車（じてんしゃ）", "気球（ききゅう）"],
        correct: 0
    },
    {
        question: "ズートピア２で、ニックの 警察官（けいさつかん）としての ランク（かいきゅう）は？",
        choices: ["ジュディと おなじ あいぼう", "ジュディの 上司（じょうし）", "まだ 見習（みなら）い", "署長（しょちょう）", "えらーい ひと", "てつだい"],
        correct: 0
    },
    {
        question: "ズートピア２に でてくる へびの ゲイリー。足（あし）は あるかな？",
        choices: ["足（あし）は ない（へびだから）", "４ほん ある", "２ほん ある", "１００ぽん ある", "たくさん ある", "みじかいのが ある"],
        correct: 0
    },
    {
        question: "ズートピア２で ジュディのファンだと言っている、ビーバーの ニブルズ。何（なに）を してる 人（ひと）？",
        choices: ["配信者（はいしんしゃ）", "洋服屋さん", "町の支配人", "警察官（けいさつかん）", "医者（いしゃ）", "先生（せんせい）"],
        correct: 0,
        image: "pics/ニブルズ.jpg"
    },
    {
        question: "ズートピア２に でてくる、この子（こ）の 名前（なまえ）は 何（なに）？",
        choices: ["ヘイスース", "ポニースル", "カナ", "ピピン", "ニコ", "ルル"],
        correct: 0,
        image: "pics/ヘイスース.jpg"
    },
    {
        question: "ズートピア２に でてくる、ゼブロ・ゼブラクストンの 口癖（くちぐせ）は 何（なに）？",
        choices: ["シマってこう！", "ウマをあわせていこう！", "大丈夫（だいじょうぶ）！", "よろしくね！", "おはよー！", "がんばろう！"],
        correct: 0,
        image: "pics/ゼブロ・ゼブラクストン.jpg"
    },
    {
        question: "ひそかに「よるの とおぼえ」の 弾丸（だんがん）を 作（つく）っていた、ヒツジの 科学者（かがくしゃ）は？",
        choices: ["ダグ", "ベルウェザー", "デューク", "フィニック", "ニック", "ボゴ"],
        correct: 0,
        image: ["pics/ダグ.exif", "pics/ダグ２.exif"]
    },
    {
        question: "ナチュリストクラブにいる、ゾウの おんなのこの 名前（なまえ）は？",
        choices: ["ナンギ", "フルー・フルー", "ガゼル", "プリシラ", "ボニー", "ナギ"],
        correct: 0,
        image: ["pics/ナンギ.exif", "pics/ナンギ２.exif"]
    },
    {
        question: "ゾウ専用（せんよう）の アイスクリームショップの 店主（てんしゅ）さんは？",
        choices: ["ジェリー・ジャンブー・ジュニア", "ニック", "ボゴ", "フラッシュ", "ギデオン", "エミット"],
        correct: 0,
        image: "pics/ジェリー・ジャンブー・ジュニア.exif"
    },
    {
        question: "ズートピア警察署（けいさつしょ）の、ガッシリした サイの 警察官（けいさつかん）は？",
        choices: ["マックホーン", "ボゴ", "ニック", "クロウハウザー", "ライオンハート", "マンチャス"],
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
        if (resultMessage) resultMessage.innerHTML = `すごい！ 全問正解（ぜんもんせいかい）！<br>きみは ズートピア・マスターだ！`;
        if (hanamaruContainer) hanamaruContainer.classList.remove("hidden");
        if (typeof confetti !== 'undefined') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else if (score >= 7) {
        if (resultMessage) resultMessage.innerHTML = `よく がんばったね！<br>あと 少し（すこし）で 満点（まんてん）だ！`;
    } else {
        if (resultMessage) resultMessage.innerHTML = `おつかれさま！<br>もう 一回（いっかい） 挑戦（ちょうせん）してみよう！`;
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
            <span>${item.total}問（もん） 中（ちゅう） ${item.score}点（てん）</span>
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
