const cells = 31;

const items = [
  { name: 'Daniela', img: 'IMG/case/Daniela.png' },
  { name: 'Elia', img: 'IMG/case/Elia.png' },
  { name: 'Ellen', img: 'IMG/case/Ellen.png' },
  { name: 'Giorgi', img: 'IMG/case/Giorgi.png' },
  { name: 'Julie', img: 'IMG/case/Julie.png' },
  { name: 'Louis', img: 'IMG/case/Louis.png' },
  { name: 'Tetiana', img: 'IMG/case/Tetiana.png' },
  { name: 'Denys', img: 'IMG/case/Denys.png' },
  { name: 'Marcel', img: 'IMG/case/Marcel.png' }
];

const questions = [
  "What is your dream vacation destination?",
  "If you could have any superpower, what would it be?",
  "What have you been excited about this week?",
  "If you could have any animal as a pet, which one would it be and why?",
  "What was the last thing you fell in love with?",
  "What interesting collection do you have, or is there anything you’d like to start collecting?",
  "If you could choose to remain an age forever, what age would you choose?",
  "Do you have a favorite mug? Let us see it and explain why you love it.",
  "Have you ever won a medal or trophy?",
  "Hot coffee or iced coffee?",
  "What interesting skill do you want to learn?",
  "If people are to make a film about you, what would the genre be? A science fiction, romantic comedy, action movie, or comedy?",
  "If you could add a word to the dictionary, what would you add and what would it mean?",
  "If you were to change your name, what name would you change to and why?",
  "Cats or dogs?",
  "If you could bring back any fashion trend, what would it be?",
  "What’s your best scary story?",
  "If you could commit any crime and get away with it, what would you choose and why?",
  "How would you spend a million dollars? How about a billion?",
  "If you had to delete all but three apps from your smartphone, which ones would you keep?",
  "What’s the best piece of advice you have ever been given?",
  "If you could change one thing about yourself, what would you choose?",
  "Would you rather lose all of your money or all of your pictures?",
  "Would you rather be the funniest or smartest person in the room?",
  "What is your absolute dream job?",
  "Are you a good dancer?",
  "What would you like to be known/remembered for?",
  "What would your dream house be like?",
  "What languages do you know how to speak?",
  "If you could magically become fluent in any language, what would it be?",
  "What is your favorite time of the day and why?",
  "What are your favorite songs from your teenage years that you still rock out to when nobody else is listening?",
  "What's your most embarrassing moment from your teen years?",
  "What is your favorite holiday?",
  "What is your most used phone app?",
  "Are you more productive in the morning or at night?",
  "Would you rather live close to work or at work?",
  "How would you describe your job to a five-year-old?",
  "What do your family and friends think you do all day?",
  "What was your first job?",
  "What is your earliest memory of this job?",
  "What is your standard office lunch?",
  "What did you want to be when you grew up?",
  "Do you prefer working from home or the office?",
  "Is it better to be late for work or to leave early?",
  "What is the most unusual job you have heard of?",
  "Would it be better to start work five years later or end five years earlier?",
  "What is something you did at work that no one noticed?",
  "What is the best work holiday?",
  "What is your 'When I was your age…' story?",
  "What is a current trend that you just don’t understand?",
  "Beach holiday or ski trip?",
  "When you are alone in the car, what volume is the music at?"
];

function getItem() {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function generateItems() {
  document.querySelector('.list').remove();
  document.querySelector('.scope').innerHTML = `<ul class="list"></ul>`;
  const list = document.querySelector('.list');

  for (let i = 0; i < cells; i++) {
    const item = getItem();
    const li = document.createElement('li');
    li.setAttribute('data-item', JSON.stringify(item));
    li.classList.add('list__item');
    li.innerHTML = `<img src="${item.img}" alt="" />`;
    list.append(li);
  }
}

function displayRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  document.querySelector('.random-question').textContent = randomQuestion;
}

generateItems();

let isStarted = false;
let isFirstStart = true;

function start() {
  if (isStarted) return;
  else isStarted = true;

  if (!isFirstStart) generateItems();
  else isFirstStart = false;

  const list = document.querySelector('.list');
  const questionContainer = document.querySelector('.question-container');
  const randomQuestionBlock = document.querySelector('.question-block');

  questionContainer.innerHTML = `<p class="question">Question for<span class="dots">...</span></p>`;
  randomQuestionBlock.style.display = 'none';

  setTimeout(() => {
    list.style.left = '50%';
    list.style.transform = 'translate3d(-50%, 0, 0)';
  }, 0);

  const item = list.querySelectorAll('li')[15];

  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    const data = JSON.parse(item.getAttribute('data-item'));
    const itemName = data.name;

    questionContainer.innerHTML = `<p class="question">Question for ${itemName}</p>`;
    randomQuestionBlock.style.display = 'block';
    displayRandomQuestion();
  }, { once: true });
}
