const quizData = [
    {
        question: "この キャラクターの なまえは？",
        choices: ["ニック・ワイルド", "ジュディ・ホップス", "フィニック", "ボゴしょちょう"],
        correct: 1,
        image: "pics/ホップス.exif"
    },
    {
        question: "じけんを かいけつする、キツネの なまえは？",
        choices: ["フィニック", "クロウハウザー", "ニック・ワイルド", "フラッシュ"],
        correct: 2,
        image: "pics/ワイルド.exif"
    },
    {
        question: "ズートピアけいさつの、こわい しょちょうさんは？",
        choices: ["スチュー", "ニック", "ボゴ", "フラッシュ"],
        correct: 2,
        image: "pics/ボゴ.exif"
    },
    {
        question: "ドーナツが だいすきな、けいさつしょの うけつけの チーターは？",
        choices: ["クロウハウザー", "ライオンハート", "マンチャス", "ギデオン"],
        correct: 0,
        image: "pics/クロウハウザー.exif"
    },
    {
        question: "ズートピアの しちょうさん。ライオンの なまえは？",
        choices: ["ボゴしょちょう", "レオドア・ライオンハート", "スチュー", "ヤックス"],
        correct: 1,
        image: "pics/ライオンハート市長.exif"
    },
    {
        question: "ひつじの ふくしちょうさんの なまえは？",
        choices: ["ベルウェザー", "ボン・ホップス", "ガゼル", "ナギ"],
        correct: 0,
        image: "pics/ベルウェザー.exif"
    },
    {
        question: "ジュディの おかあさんの なまえは？",
        choices: ["ボニー", "ベルウェザー", "プリシラ", "フルー・フルー"],
        correct: 0,
        image: "pics/スチュー・ホップス.png"
    },
    {
        question: "ジュディの おとうさんの なまえは？",
        choices: ["スチュー", "ニック", "ボゴ", "フラッシュ"],
        correct: 0,
        image: "pics/ボニー・ホップス.png"
    },
    {
        question: "「だんなさんが いなくなったの」と そうだんにきた カワウソさんは？",
        choices: ["オッタートンふじん", "ガゼル", "ジュディ", "プリシラ"],
        correct: 0
    },
    {
        question: "いなくなった カワウソの おとうさんの なまえは？",
        choices: ["エミット", "ニック", "スチュー", "フィニック"],
        correct: 0
    },

    {
        question: "ニックと いっしょに アイスを うっていた、ちいさな フェネックは？",
        choices: ["フィニック", "フラッシュ", "ミスター・ビッグ", "デューク"],
        correct: 0,
        image: "pics/フィニック.exif"
    },
    {
        question: "フラッシュと いっしょに はたらいている なまけものの おんなのこは？",
        choices: ["プリシラ", "フルー・フルー", "ガゼル", "ナギ"],
        correct: 0,
        image: "pics/プリシラ.exif"
    },
    {
        question: "とっても こわい、ネズミの ボス。なまえは？",
        choices: ["ミスター・ビッグ", "ミセス・オッタートン", "フルー・フルー", "ガゼル"],
        correct: 0,
        image: "pics/Mr.ビッグ.exif"
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
        image: "pics/ヤックス.exif"
    },
    {
        question: "ドロボウを していた、イタチの なまえは？",
        choices: ["デューク・ウィーゼルトン", "ニック・ワイルド", "フィニック", "フラッシュ"],
        correct: 0,
        image: "pics/デューク・ウィーゼルトン.exif"
    },

    {
        question: "ズートピアの だいにんき かしゅ。なまえは？",
        choices: ["ガゼル", "ベルウェザー", "フラッシュ", "ジュディ"],
        correct: 0,
        image: "pics/ガゼル.exif"
    },
    {
        question: "ジュディが けいさつしょで さいしょに まかされた おしごとは？",
        choices: ["ちゅうしゃ いはんの とりしまり", "ドロボウつかまえ", "まいごさがし", "こうつうせいり"],
        correct: 0
    },
    {
        question: "ニックが だいすきな、あかい アイスの なまえは？",
        choices: ["パウパウ・アイス", "ドーナツ・アイス", "キツネ・アイス", "ズートピア・アイス"],
        correct: 0
    },
    {
        question: "こどものころ ジュディを いじめていたけれど、おとなになって なかよくなった キツネは？",
        choices: ["ギデオン・グレー", "ニック・ワイルド", "フィニック", "ボゴ"],
        correct: 0,
        image: "pics/ギディオン・グレー.exif"
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
const remainingDisplay = document.getElementById("remaining");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const finalScoreText = document.getElementById("final-score");
const feedbackOverlay = document.getElementById("feedback-overlay");
const feedbackIcon = document.getElementById("feedback-icon");

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
    // Shuffle all questions and take the first 10
    shuffledQuiz = shuffle([...quizData]).slice(0, 10);

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    updateScore();
    showQuestion();
}

function showQuestion() {
    const q = shuffledQuiz[currentQuestion];
    questionText.innerText = q.question;

    if (q.image) {
        questionImage.src = q.image;
        imageContainer.classList.remove("hidden");
    } else {
        imageContainer.classList.add("hidden");
    }

    // Randomize choices order
    currentChoices = q.choices.map((choice, index) => ({
        text: choice,
        isCorrect: index === q.correct
    }));
    shuffle(currentChoices);

    currentChoices.forEach((choiceObj, index) => {
        choicesBtns[index].innerText = choiceObj.text;
        choicesBtns[index].classList.remove("correct-highlight", "wrong-highlight");
    });

    remainingDisplay.innerText = shuffledQuiz.length - currentQuestion;
}

function updateScore() {
    scoreDisplay.innerText = score;
    wrongScoreDisplay.innerText = wrongScore;
}

function checkAnswer(index) {
    const isCorrect = currentChoices[index].isCorrect;

    if (isCorrect) {
        score++;
        updateScore();
        choicesBtns[index].classList.add("correct-highlight");
    } else {
        wrongScore++;
        updateScore();
        choicesBtns[index].classList.add("wrong-highlight");
        // Highlight the correct one
        const correctIndex = currentChoices.findIndex(c => c.isCorrect);
        choicesBtns[correctIndex].classList.add("correct-highlight");
    }

    showFeedback(isCorrect);

    currentQuestion++;

    // Wait longer as requested (2500ms)
    setTimeout(() => {
        if (currentQuestion < shuffledQuiz.length) {
            showQuestion();
        } else {
            // Fix: set remaining to 0 before showing result
            remainingDisplay.innerText = "0";
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

    finalScoreText.innerText = `${shuffledQuiz.length}てん ちゅう ${score}てん だったよ！`;

    const message = score === shuffledQuiz.length ? "すごーい！まんてんだ！" :
        score >= 7 ? "やったね！<br>ズートピア 博士だ！" :
            "また あそんでね！";
    document.getElementById("result-message").innerHTML = message;
}

// Start the game when the page loads
window.onload = startGame;

