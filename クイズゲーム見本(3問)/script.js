const quizzes = [
    {
        question: "孫がおじいちゃんとボール遊びをしました。どんな遊びをした？",
        options: ["野球", "サッカー", "ソフトボール"],
        answer: "ソフトボール"
    },
    {
        question: "1トンの鉄と1トンの紙はどちらが重い？",
        options: ["1トンの鉄", "1トンの紙", "どちらも同じ"],
        answer: "どちらも同じ"
    },
    {
        question: "花束が2束と3束あります。合わせると何束になる？",
        options: ["0束", "1束", "5束"],
        answer: "1束"
    }
];

let currentQuizIndex = 0;
let score = 0;

function showQuiz() {
    const quiz = quizzes[currentQuizIndex];
    document.getElementById('question').textContent = quiz.question;
    document.getElementById('option1').textContent = quiz.options[0];
    document.getElementById('option2').textContent = quiz.options[1];
    document.getElementById('option3').textContent = quiz.options[2];
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizzes[currentQuizIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
        alert("正解！");
    } else {
        alert("不正解…");
    }

    currentQuizIndex++;
    if (currentQuizIndex < quizzes.length) {
        showQuiz();
    } else {
        document.getElementById('result').textContent = `終了！あなたのスコアは ${score} 点です。`;
    }
}

const buttons = document.querySelectorAll('.answerButton');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        checkAnswer(this.textContent); 
    });
}

showQuiz();
