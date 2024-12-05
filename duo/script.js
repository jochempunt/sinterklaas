const answerBox = document.querySelector('.answer-box');
const words = document.querySelectorAll('.word');
const verifyButton = document.querySelector('.verify-button');
const result = document.querySelector('.result');

const correctAnswer = ['Ik', 'heb', 'dit','jaar','veel','geleerd'];

let userAnswer = [];

const correctSound = new Audio('win.wav');
const incorrectSound = new Audio('failed.wav');

// Word click logic
words.forEach(word => {
  word.addEventListener('click', () => {
    // Check if word is already in the answer box
    if (!word.classList.contains('in-answer')) {
      word.classList.add('in-answer');
      const clonedWord = word.cloneNode(true); // Clone for answer box
      clonedWord.addEventListener('click', () => {
        // Remove word from the answer box when clicked
        answerBox.removeChild(clonedWord);
        word.classList.remove('in-answer');
        userAnswer = userAnswer.filter(item => item !== word.textContent);
      });
      answerBox.appendChild(clonedWord);
      userAnswer.push(word.textContent);
    }
  });
});


const confettiContainer = document.querySelector('.confetti-container');

function showConfetti() {
  // Remove old confetti if any
  confettiContainer.innerHTML = '';

  // Create confetti pieces
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Randomize confetti position, size, and rotation
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = `${Math.random() * 1}s`;
    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after the animation ends
  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 2000); // Match animation duration
}

screen = document.querySelector('#screen');
const mascotImg = document.getElementById('mascot');
// Verify button logic
verifyButton.addEventListener('click', () => {
  console.log('User answer:', userAnswer); // Output the current answer order
  if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
    result.textContent = 'You are correct!';
    result.style.color = 'green';
    correctSound.play();
    mascotImg.src = 'win.png';
    showConfetti(); // Trigger the confetti animation

    //get all words in answer box
    const answerWords = answerBox.querySelectorAll(".in-answer");
    // for each word in answer box, remove the click event
    answerWords.forEach(word => {
      word.classList.add('correct');
      });
    
      setTimeout(() => {
        
        window.location.href = '../gpt/index2.html';
    }, 2500);


  } else {
    result.textContent = 'Try again!';
    result.style.color = 'red';
    mascotImg.src = 'fail.png';
    incorrectSound.play();
    // mark all words in answer as incorrect
     //get all words in answer box
     const answerWords = answerBox.querySelectorAll(".in-answer");
     // for each word in answer box, remove the click event
     answerWords.forEach(word => {
       word.classList.add('wrong');
       });
    screen.classList.add('screen');
    setTimeout(() => {
      screen.classList.remove('screen');
      location.reload();
    }, 1400);
    // reload the page
   
    
  }
});
