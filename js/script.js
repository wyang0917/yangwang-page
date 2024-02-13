//Mode switch
const button = document.querySelector('.container .button');
const container = document.querySelector('.container');
button.addEventListener('click', () => {
  container.classList.toggle('dark');
  if (container.classList.contains('dark')) {
    button.textContent = 'Lumos!!';
  } else {
    button.textContent = 'Nox!!';
  }
});

//Welcome
const welcomeText = document.querySelector('.container .description p');
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(function () {
    welcomeText.style.opacity = '1';
    welcomeText.style.left = '0';
  }, 2000);
});

//Projects switch
function toggleProject(projectNumber) {
  const slides = document.querySelectorAll('.project-content .slide');
  const spanControls = document.querySelectorAll(
    '.project-content .slide-control span'
  );
  slides.forEach(function (slide) {
    slide.style.display = 'none';
  });
  spanControls.forEach(function (span) {
    span.classList.remove('active');
  });
  const selectedProject = document.querySelector(
    `.project-content .slide:nth-child(${projectNumber})`
  );
  const selectedSpan = document.querySelector(
    `.project-content span:nth-child(${projectNumber})`
  );
  selectedProject.style.display = 'block';
  selectedSpan.classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
  toggleProject(1);
});

//Back to top  button hide
function scrollBtn() {
  const pageHeight = document.documentElement.scrollHeight / 8;
  const topBtn = document.querySelector('#topBtn');
  if (document.documentElement.scrollTop > pageHeight) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// shuffle cards
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomCards() {
  const cards = Array.from(document.querySelectorAll('.card'));
  const cardsContainer = document.querySelector('.cards-container');
  shuffleArray(cards);
  cards.forEach((card) => {
    cardsContainer.appendChild(card);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  randomCards();
});

//typewriter
let index = 0;
let direction = 1;
const word = [' ','Y', 'A', 'N', 'G'];
function typewriterText() {
  const span = document.querySelector('#contact h3 span');
  if (direction === 1) {
    if (index < word.length) {
      span.textContent = word.slice(0, index + 1).join('');
      index++;
    } else {
      direction = -1;
    }
  } else {
    if (index > 0) {
      span.textContent = word.slice(0, index).join('');
      index--;
    } else {
      direction = 1;
    }
  }
  setTimeout(typewriterText, 500);
}
typewriterText()