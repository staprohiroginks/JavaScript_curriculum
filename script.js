// 最初に作る方
// document.getElementById('button1').addEventListener('click', () =>{
//     alert('正解です！')
// });

// document.getElementById('button2').addEventListener('click', () =>{
//     alert('残念...正解はコアラです！')
// });

// document.getElementById('button3').addEventListener('click', () =>{
//     alert('残念...正解はコアラです！')
// });


// リファクタリング
const correctAnswer = document.getElementById('button1');

const checkAnswer = (selectedButton) =>{
    if (selectedButton === correctAnswer) {
        alert('正解です！')
    } else {
        alert('残念...正解はコアラです！')
    }
}

const buttons = document.querySelectorAll('.answerButton');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        checkAnswer(this);
    });
}


