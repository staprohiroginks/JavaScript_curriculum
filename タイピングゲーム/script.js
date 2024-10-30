const questions = [
    'スタートプログラミング',
    'プログラミングスクール',
    'ミンクル',
    'エンジニアになりたいな',
    'ゲームを作れるようになる！',
    '今はスクラッチを勉強中です',
    'いろんなところに教室があります',
    'タイピングの練習をがんばるぞ！',
    '検定問題にもチャレンジしています',
    'パソコンはとても楽しいです'
];

const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');
const game = document.getElementById('game');
const message = document.getElementById('message');
const endMessage = document.getElementById('endMessage');
const timerElement = document.getElementById('timer');

let currentKey;
let currentText;
let timer;
let countTimer = 30; 

// 新しい問題文をランダムにセットする関数
const setQuestion = () => {
    // 問題文をランダムで選ぶ
    currentKey = Math.floor( Math.random() * questions.length );
    currentText = questions[ currentKey ];

    // 一度選ばれた問題は配列から削除
    questions.splice(currentKey, 1);

    // 画面に新しい問題文をセット
    entered.textContent = '';
    remained.textContent = currentText;

    // これまでフォームに入力された値をリセット
    inputText.value = '';
};

const displayEndMessage = (messageText) => {
    clearInterval(timer);
    game.classList.add('hidden');
    message.classList.remove('hidden');
    endMessage.innerHTML = `${messageText}<br><button id='replayBtn' class='button'>もう一度プレイする</button>`;
    document.getElementById('replayBtn').addEventListener('click', () => {
        window.location.reload();
    });
};

const startTimer = () => {
    timer = setInterval(() => {
        countTimer--;
        timerElement.textContent = `${countTimer}秒`;

        if (countTimer <= 0) {
            displayEndMessage("タイムアップ！もう一度挑戦してね！");
        }
    }, 1000);
};

document.addEventListener('input', () => {
    const input = inputText.value;

    if (currentText.startsWith(input)) {
        entered.textContent = input;
        remained.textContent = currentText.slice(input.length);

        inputText.classList.add('correct');
        inputText.classList.remove('incorrect');

        if (input === currentText) {
            if (questions.length <= 0) {
                displayEndMessage("ゲームクリア！お疲れ様でした！");
            } else {
                setQuestion(); // 新しい問題文をセット
            }
        }
    } else {
        inputText.classList.add('incorrect');
        inputText.classList.remove('correct');
    }
});

// 初期設定
setQuestion();
startTimer();
