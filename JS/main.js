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
  { name: 'Rebecca', img: 'IMG/case/Rebecca.png' },
  { name: 'Alma', img: 'IMG/case/Alma.png' },
  { name: 'Marcel', img: 'IMG/case/Marcel.png' },
  { name: 'Dmytro', img: 'IMG/case/Dmytro.png' }
];

const questions = [
  "What is your dream vacation destination?",
  // "What have you been excited about this week?",
  // "If you could have any animal as a pet, which one would it be and why?",
  // "What was the last thing you fell in love with?",
  "What interesting collection do you have, or is there anything you’d like to start collecting?",
  "If you could choose to remain an age forever, what age would you choose?",
  "Have you ever won a medal or trophy?",
  // "Hot coffee or iced coffee?",
  "If you could add a word to the dictionary, what would you add and what would it mean?",
  "If you were to change your name, what name would you change to and why?",
  // "Cats or dogs?",
  // "What’s your best scary story?",
  // "Would you rather lose all of your money or all of your pictures?",
  "Would you rather be the funniest or smartest person in the room?",
  "What is your absolute dream job?",
  // "Are you a good dancer?",
  // "What would you like to be known/remembered for?",
  "What would your dream house be like?",
  "What languages do you know how to speak?",
  "If you could magically become fluent in any language, what would it be?",
  "What is your favorite time of the day and why?",
  // "What are your favorite songs from your teenage years that you still rock out to when nobody else is listening?",
  // "What's your most embarrassing moment from your teen years?",
  // "What is your favorite holiday?",
  "What is your most used phone app?",
  // "Are you more productive in the morning or at night?",
  // "How would you describe your job to a five-year-old?",
  "What do your family and friends think you do all day?",
  "What was your first job?",
  "What is your earliest memory of this job?",
  "What is your standard office lunch?",
  "What did you want to be when you grew up?",
  // "Do you prefer working from home or the office?",
  // "What is the most unusual job you have heard of?",
  // "Would it be better to start work five years later or end five years earlier?",
  // "What is the best work holiday?",
  // "What is your 'When I was your age…' story?",
  "Beach holiday or ski trip?",
  "When you are alone in the car, what volume is the music at?",
  "What game show do you think you have the best chance of winning?",
  "What's your most-used emoji?",
  "What's the worst childhood outfit your parents made you wear?",
  "What was the worst hairstyle choice you made?",
  // "What's the most ridiculous impulse purchase you've ever made?",
  "When you were a kid, what was the silliest thing you believed?",
  "When I dance, I look like __________.",
  // "What is your guilty TV pleasure?",
  // "What's the most brainless thing you did while sleep deprived?",
  // "What fashion trend do you wish would come back?",
  "What song is guaranteed to make you sing?",
  // "What are your three simple joys?",
  "What lesson are you most grateful for learning?",
  // "What's one aspect of your personality that you're grateful for?",
  // "How do your team's contributions help you do your job more effectively?",
  // "What skills are you thankful for gaining on this team?",
  "What's your favorite team memory?",
  "What team project did you enjoy completing the most? Why?",
  "The thing I enjoy most about my job is _________.",
  "Which team member made you laugh last?",
  // "What qualities do you appreciate the most in this team?",
  "What is your favorite work-from-home productivity hack?",
  // "When working from home, I typically wear ___________.",
  "What's the most expensive thing in your home office?",
  "What's your favorite workday snack?",
  // "How do you minimize distractions while working remotely?",
  "What's the best thing about your home office setup?",
  "What's your favorite work-from-home playlist?",
  "How often do you work from bed?",
  "If you're living in a new city, how did you end up there?",
  "What's your greatest professional achievement?",
  "What's your greatest personal achievement?",
  "What's one of your biggest fears?",
  // "Who was your biggest role model as a kid?",
  // "Who is your most influential role model right now?",
  "What's the kindest thing someone's done for you?",
  "What's the biggest goal for your career?",
  "How do you handle change?",
  "What book had the biggest impact on your life?",
  // "What inspired you to pursue the career you have today?",
];

function getSelectedItems() {
  const selectedItems = [];
  const toggleElements = document.querySelectorAll('.toggle-item input[type="checkbox"]:checked');

  for (const toggleElement of toggleElements) {
    const name = toggleElement.parentNode.querySelector('.name').textContent;
    const item = items.find(item => item.name === name);
    if (item) {
      selectedItems.push(item);
    }
  }
  return selectedItems;
}

function generateItems() {
  document.querySelector('.list').remove();
  document.querySelector('.scope').innerHTML = `<ul class="list"></ul>`;
  const list = document.querySelector('.list');

  const selectedItems = getSelectedItems();

  for (let i = 0; i < cells; i++) {
    if (selectedItems.length === 0) break;

    const randomIndex = Math.floor(Math.random() * selectedItems.length);
    const item = selectedItems[randomIndex];
    const li = document.createElement('li');
    li.setAttribute('data-item', JSON.stringify(item));
    li.classList.add('list__item');
    li.innerHTML = `<img src="${item.img}" alt="" />`;
    list.append(li);
  }
}

function handleCheckboxChange() {
  generateItems();
}

document.querySelectorAll('.toggle-item input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckboxChange);
});

generateItems();


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

    const toggleItems = document.querySelectorAll('.toggle-item');
    toggleItems.forEach(toggleItem => {
      const nameElement = toggleItem.querySelector('.name');
      if (nameElement.textContent === itemName) {
        toggleItem.querySelector('.toggle').checked = false;
      }
    });
  }, { once: true });
}
