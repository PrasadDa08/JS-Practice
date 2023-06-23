'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number'
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10  
 
// document.querySelector('.guess').value = 13 
const secrectNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secrectNumber
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
 // when there is no number
    if(!guess) {
        document.querySelector('.message').textContent = 'No Number'

        // when player wins
    }else if(guess === secrectNumber) {
        document.querySelector('.message').textContent = 'correct Number'

        document.querySelector('body').style.backgroundColor ='#60b347'

        document.querySelector('.number').style.width = '30rem'

        // when number is to high
    }else if (guess > secrectNumber) {
        if (score >1){
        document.querySelector('.message').textContent = 'Too high'
        score--;
        document.querySelector('.score').textContent = score
        }else {
            document.querySelector('.message').textContent = 'You lost the Game ;)'
            document.querySelector('.score').textContent = 0
        }

        // when number is too low
    }else if (guess < secrectNumber) {
        if (score >1){
            document.querySelector('.message').textContent = 'Too Low'
            score--;
            document.querySelector('.score').textContent = score
            }else {
                document.querySelector('.message').textContent = 'You lost the Game ;)'
                document.querySelector('.score').textContent = 0
            } 
    }
}); 