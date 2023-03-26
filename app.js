const body = document.querySelector('body');
const inputYear = document.querySelector('.input-year');
const inputMonth = document.querySelector('.input-month');
const inputDay = document.querySelector('.input-day');
const inputPlans = document.querySelector('.input-plans');

let userYear;
let userMonth;
let userDay;
let lifeWeeks;
let today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDay = today.getDay();
let userPlans = '';

const btnIndex = document.querySelector('.btn-index');
const modalAge = document.querySelector('.modal-age');
btnIndex.addEventListener('click', function () {
  btnIndex.textContent = `LET'S DO THIS`;
  btnIndex.classList.add('fade-out');

  setTimeout(function () {
    btnIndex.classList.add('hidden');
    modalAge.classList.add('fade-in');
    modalAge.classList.remove('hidden');
  }, 2700);

  modalAge.classList.remove('fadeIn');
  modalAge.classList.add('shadow');
});

const btnApp = document.querySelector('.btn-app');
const modalPlans = document.querySelector('.modal-plans');
btnApp.addEventListener('click', function () {
  modalAge.classList.remove('fade-in');
  modalAge.classList.add('fade-out');
  btnApp.textContent = 'COOL';
  setTimeout(function () {
    modalAge.classList.add('hidden');
    modalPlans.classList.add('fade-in');
    modalPlans.classList.remove('hidden');
  }, 2700);
});
let userAge;
const btnResult = document.querySelector('.btn-result');
const modalResult = document.querySelector('.modal-result');
btnResult.addEventListener('click', function () {
  userPlans = inputPlans.value;
  modalPlans.classList.remove('fade-in');
  modalPlans.classList.add('fade-out');
  document.getElementById('year-text').classList.add('hidden');
  setTimeout(function () {
    modalPlans.classList.add('hidden');
  }, 2700);
  modalResult.classList.add('fade-in');
  modalResult.classList.remove('hidden');
  userYear = inputYear.value;
  userMonth = inputMonth.value;
  userDay = inputDay.value;
  userAge = currentYear - userYear;
  if (userMonth - currentMonth > 0) userAge = userAge - 1;
  lifeWeeks = userAge * 12 * 4;
  if (userMonth - currentMonth > 0) lifeWeeks += userMonth - currentMonth * 4;
  document.getElementById('year-text').textContent =
    "You're only  " +
    userAge +
    ' years old.' +
    ' You still got plenty of times to ' +
    userPlans +
    ' , right?';
  setTimeout(function () {
    document.getElementById('year-text').classList.add('fade-in-text');
    document.getElementById('year-text').classList.remove('hidden');
  }, 3300);
  setTimeout(function () {
    document.getElementById('question-text').classList.add('fade-in-text');
    document.getElementById('question-text').classList.remove('hidden');
  }, 8300);
  setTimeout(function () {
    document.querySelector('.btn-show').classList.add('fade-in-text');
    document.querySelector('.btn-show').classList.remove('hidden');
  }, 12300);
});

const btnShow = document.querySelector('.btn-show');
btnShow.addEventListener('click', function () {
  modalResult.classList.remove('fade-in');
  modalResult.classList.add('fade-out');
  setTimeout(function () {
    modalResult.classList.add('hidden');
    document.getElementById('month-container').classList.add('fade-in');
    document.getElementById('month-container').classList.remove('hidden');
  }, 2000);

  for (let i = 0; i < 4160; i++) {
    setTimeout(function () {
      newdiv = document.createElement('div');
      newdiv.classList.add('month-cubes');
      document.getElementById('month-container').appendChild(newdiv);
      if (i < lifeWeeks) {
        newdiv.classList.remove('month-cubes');
        newdiv.classList.add('month-cubes-spent');
      } else {
        document.getElementById('remaining').classList.add('fade-in-text');
        document.getElementById('remaining').classList.remove('hidden');
        document.getElementById(
          'remaining'
        ).textContent = `${lifeWeeks} WEEKS SPENT.`;
        document.getElementById('remaining2').classList.add('fade-in-slow');
        document.getElementById('remaining2').classList.remove('hidden');
        document.getElementById(
          'remaining2'
        ).textContent = `MAKE THE REMAINING ${
          4100 - lifeWeeks
        } USEFUL. DO THE THING.`;
      }
    }, i * 2);
  }
});
