const quizData = [
    {
        question: "この キャラクターの なまえは？",
        choices: ["ニック・ワイルド", "ジュディ・ホップス", "フィニック", "ボゴしょちょう"],
        correct: 1,
        image: ["pics/ホップス.exif", "pics/ホップス２.exif"]
    },
    {
        question: "じけんを かいけつする、キツネの なまえは？",
        choices: ["フィニック", "クロウハウザー", "ニック・ワイルド", "フラッシュ"],
        correct: 2,
        image: ["pics/ワイルド.exif", "pics/ワイルド２.exif"]
    },
    {
        question: "ズートピアけいさつの、こわい しょちょうさんは？",
        choices: ["スチュー", "ニック", "ボゴ", "フラッシュ"],
        correct: 2,
        image: ["pics/ボゴ.exif", "pics/ボゴ２.exif"]
    },
    {
        question: "ドーナツが だいすきな、けいさつしょの うけつけの チーターは？",
        choices: ["クロウハウザー", "らいおんはーと", "まんちゃす", "ぎでおん"],
        correct: 0,
        image: ["pics/クロウハウザー.exif", "pics/クロウハウザー2.exif"]
    },
    {
        question: "ズートピアの しちょうさん。ライオンの なまえは？",
        choices: ["ボゴしょちょう", "レオドア・ライオンハート", "スチュー", "ヤックス"],
        correct: 1,
        image: ["pics/ライオンハート市長.exif", "pics/ライオンハート市長２.exif"]
    },
    {
        question: "ひつじの ふくしちょうさんの なまえは？",
        choices: ["ベルウェザー", "ボン・ホップス", "ガゼル", "ナギ"],
        correct: 0,
        image: ["pics/ベルウェザー.exif", "pics/ベルウェザー２.exif"]
    },
    {
        question: "ジュディの おかあさんの なまえは？",
        choices: ["ボニー", "ベルウェザー", "プリシラ", "フルー・フルー"],
        correct: 0,
        image: "pics/ボニー・ホップス.png"
    },
    {
        question: "ジュディの おとうさんの なまえは？",
        choices: ["スチュー", "ニック", "ボゴ", "フラッシュ"],
        correct: 0,
        image: "pics/スチュー・ホップス.png"
    },
    {
        question: "「だんなさんが いなくなったの」と そうだんにきた カワウソさんは？",
        choices: ["オッタートンふじん", "ガゼル", "ジュディ", "プリシラ"],
        correct: 0,
        image: "pics/オッタートンふじん.exif"
    },
    {
        question: "いなくなった カワウソの おとうさんの なまえは？",
        choices: ["エミット", "ニック", "スチュー", "フィニック"],
        correct: 0,
        image: ["pics/エミット・オッタートン.exif", "pics/エミット・オッタートン２.jpg"]
    },
    {
        question: "じけんの ことを しっていた、ジャガーの なまえは？",
        choices: ["マンチャス", "ボゴ", "ヤックス", "デューク"],
        correct: 0,
        image: ["pics/マンチャス.webp", "pics/マンチャス２.jpg"]
    },
    {
        question: "ニックと いっしょに アイスを うっていた、ちいさな フェネックは？",
        choices: ["フィニック", "フラッシュ", "ミスター・ビッグ", "デューク"],
        correct: 0,
        image: ["pics/フィニック.exif", "pics/フィニック２.exif", "pics/フィニック３.exif"]
    },
    {
        question: "のんびりやさんの なまけもの。なまえは？",
        choices: ["フラッシュ", "ニック", "ボゴ", "ガゼル"],
        correct: 0,
        image: "pics/フラッシュ.exif"
    },
    {
        question: "フラッシュと いっしょに はたらいている なまけものの おんなのこは？",
        choices: ["プリシラ", "フルー・フルー", "ガゼル", "ナギ"],
        correct: 0,
        image: ["pics/プリシラ.exif", "pics/プリシラ２.exif"]
    },
    {
        question: "とっても こわい、ネズミの ボス。なまえは？",
        choices: ["ミスター・ビッグ", "ミセス・オッタートン", "フルー・フルー", "ガゼル"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "ミスター・ビッグの むすめさんの なまえは？",
        choices: ["フルー・フルー", "ジュディ", "ベルウェザー", "ガゼル"],
        correct: 0,
        image: "pics/フルー・フルー.exif"
    },
    {
        question: "ナチュリストクラブにいる、ヤクの なまえは？",
        choices: ["ヤックス", "マンチャス", "ボゴ", "ニック"],
        correct: 0,
        image: ["pics/ヤックス.exif", "pics/ヤックス２.exif"]
    },
    {
        question: "ドロボウを していた、イタチの なまえは？",
        choices: ["デューク・ウィーゼルトン", "ニック・ワイルド", "フィニック", "フラッシュ"],
        correct: 0,
        image: ["pics/デューク・ウィーゼルトン.exif", "pics/デューク・ウィーゼルトン２.exif"]
    },
    {
        question: "ズートピアの だいにんき かしゅ。なまえは？",
        choices: ["ガゼル", "ベルウェザー", "フラッシュ", "ジュディ"],
        correct: 0,
        image: ["pics/ガゼル.exif", "pics/ガゼル２.exif"]
    },
    {
        question: "ニュースを つたえる、トナカイの なまえは？",
        choices: ["ピーター・ムースブリッジ", "ニック", "ボゴ", "ライオンハート"],
        correct: 0,
        image: "pics/ピーター・ムースブリッジ.webp"
    },
    {
        question: "こどものころ ジュディを いじめていたけれど、おとなになって なかよくなった キツネは？",
        choices: ["ギデオン・グレー", "ニック・ワイルド", "フィニック", "ボゴ"],
        correct: 0,
        image: ["pics/ギディオン・グレー.exif", "pics/ギディオン・グレー２.exif"]
    },
    {
        question: "しゅじんこうの ジュディは、なんの どうぶつ？",
        choices: ["うさぎ", "きつね", "ひつじ", "ちーたー"],
        correct: 0,
        image: ["pics/ホップス.exif", "pics/ホップス２.exif"]
    },
    {
        question: "ニックは、なんの どうぶつ？",
        choices: ["きつね", "おおかみ", "とら", "らくだ"],
        correct: 0,
        image: ["pics/ワイルド.exif", "pics/ワイルド２.exif"]
    },
    {
        question: "ニックが ジュディを よぶときに つかう、やさいの なまえは？",
        choices: ["にんじん", "たまねぎ", "ぴーまん", "じゃがいも"],
        correct: 0
    },
    {
        question: "ベルウェザー ふくしちょうは、なんの どうぶつ？",
        choices: ["ひつじ", "やぎ", "うし", "うま"],
        correct: 0,
        image: ["pics/ベルウェザー.exif", "pics/ベルウェザー２.exif"]
    },
    {
        question: "どうぶつたちを おこらせてしまう、こわい おはなの なまえは？",
        choices: ["よるの とおぼえ", "あかりの はな", "ねむりの くさ", "どくの み"],
        correct: 0
    },
    {
        question: "うけつけの クロウハウザーは、なんの どうぶつ？",
        choices: ["ちーたー", "らいおん", "ひょう", "くま"],
        correct: 0,
        image: ["pics/クロウハウザー.exif", "pics/クロウハウザー2.exif"]
    },
    {
        question: "めんきょせんたーで はたらく フラッシュは、なんの どうぶつ？",
        choices: ["なまけもの", "かめ", "ぞう", "かば"],
        correct: 0
    },
    {
        question: "ミスター・ビッグは、どこの まちの ボス？",
        choices: ["つんどらたうん", "さばら・すくえあ", "れいんふぉれすと", "だうんたうん"],
        correct: 0
    },
    {
        question: "とっても ちいさな ミスター・ビッグは、なんの どうぶつ？",
        choices: ["トガリネズミ", "はむすたー", "りす", "もぐら"],
        correct: 0,
        image: ["pics/Mr.ビッグ.exif", "pics/Mr.ビッグ２.exif"]
    },
    {
        question: "ズートピアの しゅだいか（うた）の なまえは？",
        choices: ["トライ・エヴリシング", "ハッピー・ソング", "ズートピア・マーチ", "あしたへ ジャンプ"],
        correct: 0
    },
    {
        question: "ジュディが おとうさんたちから よばれている あだなは？",
        choices: ["じゅーじゅー", "じゅでぃー", "ぴょんぴょん", "うさちゃん"],
        correct: 0
    },
    {
        question: "ジュディは、なんにん きょうだい？",
        choices: ["275ひき", "10ひき", "50ひき", "100ひき"],
        correct: 0
    },
    {
        question: "2025ねんに こうかいされる「ズートピア２」。なぞの へびの なまえは？",
        choices: ["ゲイリー", "パウバート", "ニブルズ", "ヘイスース"],
        correct: 0
    },
    {
        question: "ズートピア２で、ジュディのファンだといって そうさを てつだってくれる、オオヤマネコは？",
        choices: ["パウバート", "ゲイリー", "ニブルズ", "ニック"],
        correct: 0
    },
    {
        question: "ズートピア２は、なんねんの ふゆに こうかいされるかな？",
        choices: ["2025ねん", "2024ねん", "2026ねん", "2030ねん"],
        correct: 0
    },
    {
        question: "ズートピア２で、ズートピアの なぞについて はなしている ビーバーの なまえは？",
        choices: ["ニブルズ", "ボニー", "スチュー", "フラッシュ"],
        correct: 0
    },
    {
        question: "ジュディが けいさつしょで さいしょに まかされた おしごとは？",
        choices: ["ちゅうしゃ いはんの とりしまり", "ドロボウつかまえ", "まいごさがし", "こうつうせいり"],
        correct: 0
    },
    {
        question: "ニックが だいすきな、あかい 肉球（にくきゅう）の かたちをした アイスの なまえは？",
        choices: ["パウシクル（Pawpsicle）", "ドーナツ・アイス", "キツネ・アイス", "ズートピア・アイス"],
        correct: 0
    },
    {
        question: "ニックが こどものころに はいりたかった、チームの なまえは？",
        choices: ["ジュニア・レンジャー・スカウト", "けいさつたい", "アイスクリームやさん", "サッカーチーム"],
        correct: 0
    },
    {
        question: "ズートピア２で、ニックと ジュディが はじめて ちょうさに いく、みずべの まちは？",
        choices: ["マシュラン（Marshlands）", "サハラ・スクエア", "ツンドラ・タウン", "レインフォレスト"],
        correct: 0
    },
    {
        question: "へびの ゲイリーの こえを たんとうした、ゆうめいな はいゆうさんは？",
        choices: ["キー・ホイ・クァン", "トム・ハンクス", "ブラッド・ピット", "アンパンマン"],
        correct: 0
    },
    {
        question: "ズートピア２で、じけんの カギを にぎる、今まで ズートピアに いなかった どうぶつたちは？",
        choices: ["はちゅうるい（へびや とかげ）", "とり（タカや スズメ）", "さかな", "むし"],
        correct: 0
    },
    {
        question: "よこくへんで、ニックと ジュディが ゲイリーを つかまえるために のっていた のりものは？",
        choices: ["ボート", "パトカー", "ヘリコプター", "スケートボード"],
        correct: 0
    },
    {
        question: "ズートピア２で、ニックの けいさつかんとしての ランク（かいきゅう）は？",
        choices: ["ジュディと おなじ あいぼう", "ジュディの じょうし", "まだ みならい", "しょちょう"],
        correct: 0
    },
    {
        question: "ズートピア２に でてくる へびの ゲイリー。あしは あるかな？",
        choices: ["あしは ない（へびだから）", "４ほん ある", "２ほん ある", "１００ぽん ある"],
        correct: 0
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

    document.getElementById("hanamaru-container").classList.add("hidden");
    document.getElementById("fireworks-container").innerHTML = "";

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");
    updateScore();
    showQuestion();
}

function showQuestion() {
    const q = shuffledQuiz[currentQuestion];

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

    // Create an array of choice objects and shuffle them
    currentChoices = q.choices.map((choice, index) => ({
        text: choice,
        isCorrect: index === q.correct
    }));
    shuffle(currentChoices);

    // Update buttons with shuffled choices
    currentChoices.forEach((choiceObj, index) => {
        choicesBtns[index].innerText = choiceObj.text;
        choicesBtns[index].classList.remove("correct-highlight", "wrong-highlight");
    });
}

function updateScore() {
    if (scoreDisplay) scoreDisplay.innerText = score;
    if (wrongScoreDisplay) wrongScoreDisplay.innerText = wrongScore;
}

function checkAnswer(index) {
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
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreBoard.classList.add("hidden");
    const finalScoreLabel = `${shuffledQuiz.length}てん ちゅう ${score}てん だったよ！`;
    finalScoreText.innerText = finalScoreLabel;

    if (score === shuffledQuiz.length) {
        // Perfect score celebration
        document.getElementById("hanamaru-container").classList.remove("hidden");
        triggerFireworks();
        document.getElementById("result-message").innerHTML = "すごーい！まんてんだ！💮";
    } else {
        document.getElementById("hanamaru-container").classList.add("hidden");
        const message = score >= 7 ? "やったね！<br>ズートピア 博士だ！" : "また あそんでね！";
        document.getElementById("result-message").innerHTML = message;
    }

    saveAndShowHistory();
}

function saveAndShowHistory() {
    const historyList = document.getElementById("history-list");
    let scores = JSON.parse(localStorage.getItem('quizScoreHistory') || '[]');

    // Add current score with date
    const now = new Date();
    const dateStr = `${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    scores.unshift({ date: dateStr, score: score, total: shuffledQuiz.length });

    // Keep only last 5
    scores = scores.slice(0, 5);
    localStorage.setItem('quizScoreHistory', JSON.stringify(scores));

    // Display
    historyList.innerHTML = scores.map(item => `
        <li>
            <span>${item.date}</span>
            <span>${item.total}もん ちゅう ${item.score}てん</span>
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

window.onload = startGame;
