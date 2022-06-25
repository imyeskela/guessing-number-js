'use strict';

// document.querySelector('.guess-message').textContent = 'Правильно!';
// document.querySelector('.question').textContent = 7;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.number-input').value = 15
//
// console.log(document.querySelector('.number-input').value);

let secretNum = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNum);
let score = 20;
// console.log(secretNum);
// document.querySelector('.question').textContent = secretNum;


const eventNumInput = function  () {
    const inputNum = Number(document.querySelector('.number-input').value);
    // console.log(inputNum);
    let guessMessageDom = document.querySelector('.guess-message')
    let scoreDom = document.querySelector('.score')

    // No input
    if (!inputNum){
        guessMessageDom.textContent = 'Введите число';

    // Player won
    }else if (inputNum === secretNum) {
        guessMessageDom.textContent = 'Правильно!';
        document.querySelector('.question').textContent = secretNum;
        document.querySelector('.number-input').style.backgroundColor = 'rgb(3, 136, 0)'
    } else if (inputNum !== secretNum) {
        if (score > 1){
             guessMessageDom.textContent = inputNum > secretNum ? 'Слишком много!' : 'Слишком мало!';
             score--;
             scoreDom.textContent = score;
        } else {
            guessMessageDom.textContent = 'Game over(!';
            scoreDom.textContent = 0;
        }
    }
    // Too high
    // }else if (inputNum > secretNum){
    //     if (score > 1){
    //          guessMessageDom.textContent = 'Слишком много!';
    //          score--;
    //          scoreDom.textContent = score;
    //     }else {
    //         guessMessageDom.textContent = 'Game over(!';
    //         scoreDom.textContent = 0;
    //     }
    //
    // // Too low
    // }else if (inputNum < secretNum){
    //     if (score > 1){
    //         guessMessageDom.textContent = 'Слишком мало!';
    //         score--;
    //         scoreDom.textContent = score;
    //     }else {
    //         guessMessageDom.textContent = 'Game over(';
    //         scoreDom.textContent = 0;
    //     }
    // }
};

const evenAgain = function () {
    document.querySelector('.question').textContent = '???'
    document.querySelector('.number-input').style.backgroundColor = 'rgb(0, 0, 0)'
    document.querySelector('.guess-message').textContent = 'Начни угадывать!'

    let highScoreDom = document.querySelector('.highscore');
    if (score > Number(highScoreDom.textContent)) {
        highScoreDom.textContent = score
    }
    document.querySelector('.number-input').value = ''
    document.querySelector('.score').textContent = 20;
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.check')
    .addEventListener(
        'click',
        eventNumInput,
    );

document.querySelector('.again')
    .addEventListener(
        'click',
        evenAgain,
    )