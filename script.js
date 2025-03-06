document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

document.getElementById('toggle-flashcards').addEventListener('click', () => {
    document.querySelectorAll('.flashcard').forEach(card => {
      card.classList.toggle('flipped');
    });
});

  // JavaScript for quiz functionality
document.addEventListener('DOMContentLoaded', function () {
  const quizOptions = document.querySelectorAll('.quiz-option');

  quizOptions.forEach(option => {
      option.addEventListener('click', function () {
          // Disable all options in the current quiz after selection
          const parentQuiz = option.closest('.quiz');
          const options = parentQuiz.querySelectorAll('.quiz-option');

          options.forEach(opt => {
              opt.style.pointerEvents = 'none'; // Disable further clicks
              opt.classList.add('disabled');
          });

          // Check if the selected option is correct
          if (option.getAttribute('data-is-correct') === 'true') {
              option.classList.add('correct');
          } else {
              option.classList.add('incorrect');
          }

          // Highlight the correct answer
          const correctOption = parentQuiz.querySelector('[data-is-correct="true"]');
          correctOption.classList.add('correct');
      });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1); // Get ID without '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      e.preventDefault(); // Prevent default jump to anchor
      
      // Add highlight class
      targetElement.classList.add('highlight');

      // Remove the highlight class after animation
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 1000); // Duration of the highlight effect

      // Scroll to the element smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
      h = 12;
  }

  if (h > 12) {
      h = h - 12;
      session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = h + ":" + m + ":" + s;
  document.querySelector(".digital-clock").innerText = convertToBanglaDigits(time);
  document.querySelector(".digital-clock").textContent = convertToBanglaDigits(time);

  setTimeout(showTime, 1000);
}

showTime();

function convertToBanglaDigits(value) {
  const numbers = {
      0: '০',
      1: '১',
      2: '২',
      3: '৩',
      4: '৪',
      5: '৫',
      6: '৬',
      7: '৭',
      8: '৮',
      9: '৯'
  };

  return value.replace(/[0-9]/g, function (w) {
      return numbers[w];
  });
}

