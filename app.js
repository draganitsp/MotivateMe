const body = document.querySelector('body');
const inputYear = document.querySelector('.inputYear');
const inputMonth = document.querySelector('.inputMonth');
const inputDay = document.querySelector('.inputDay');
const inputPlans = document.querySelector('.inputPlans');

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
const modalAge = document.querySelector('.modalAge');
btnIndex.addEventListener('click', function () {
  btnIndex.textContent = `LET'S DO THIS`;
  btnIndex.classList.add('fadeOut');

  setTimeout(function () {
    btnIndex.classList.add('hidden');
    modalAge.classList.add('fadeIn');
    modalAge.classList.remove('hidden');
  }, 2700);

  modalAge.classList.remove('fadeIn');
  modalAge.classList.add('shadow');
});

const btnApp = document.querySelector('.btn-app');
const modalPlans = document.querySelector('.modalPlans');
btnApp.addEventListener('click', function () {
  modalAge.classList.remove('fadeIn');
  modalAge.classList.add('fadeOut');
  btnApp.textContent = 'COOL';
  setTimeout(function () {
    modalAge.classList.add('hidden');
    modalPlans.classList.add('fadeIn');
    modalPlans.classList.remove('hidden');
  }, 2700);
});
let userAge;
const btnResult = document.querySelector('.btn-result');
const modalResult = document.querySelector('.modalResult');
btnResult.addEventListener('click', function () {
  userPlans = inputPlans.value;
  modalPlans.classList.remove('fadeIn');
  modalPlans.classList.add('fadeOut');
  document.getElementById('yearText').classList.add('hidden');
  setTimeout(function () {
    modalPlans.classList.add('hidden');
  }, 2700);
  modalResult.classList.add('fadeIn');
  modalResult.classList.remove('hidden');
  userYear = inputYear.value;
  userMonth = inputMonth.value;
  userDay = inputDay.value;
  userAge = currentYear - userYear;
  if (userMonth - currentMonth > 0) userAge = userAge - 1;
  lifeWeeks = userAge * 12 * 4;
  if (userMonth - currentMonth > 0) lifeWeeks += userMonth - currentMonth * 4;
  document.getElementById('yearText').textContent =
    "You're only  " +
    userAge +
    ' years old.' +
    ' You still got plenty of times to ' +
    userPlans +
    ' , right?';
  setTimeout(function () {
    document.getElementById('yearText').classList.add('fadeInText');
    document.getElementById('yearText').classList.remove('hidden');
  }, 3300);
  setTimeout(function () {
    document.getElementById('questionText').classList.add('fadeInText');
    document.getElementById('questionText').classList.remove('hidden');
  }, 8300);
  setTimeout(function () {
    document.querySelector('.btn-show').classList.add('fadeInText');
    document.querySelector('.btn-show').classList.remove('hidden');
  }, 12300);
});

const btnShow = document.querySelector('.btn-show');
btnShow.addEventListener('click', function () {
  modalResult.classList.remove('fadeIn');
  modalResult.classList.add('fadeOut');
  setTimeout(function () {
    modalResult.classList.add('hidden');
    document.getElementById('month-container').classList.add('fadeIn');
    document.getElementById('month-container').classList.remove('hidden');
  }, 2000);

  for (let i = 0; i < 4160; i++) {
    setTimeout(function () {
      newdiv = document.createElement('div');
      newdiv.classList.add('monthCubes');
      document.getElementById('month-container').appendChild(newdiv);
      if (i < lifeWeeks) {
        newdiv.classList.remove('monthCubes');
        newdiv.classList.add('monthCubesSpent');
      } else {
        document.getElementById('remaining').classList.add('fadeIn');
        document.getElementById('remaining').classList.remove('hidden');
        document.getElementById(
          'remaining'
        ).textContent = `${lifeWeeks} WEEKS SPENT.`;
        document.getElementById('remaining2').classList.add('fadeInSlow');
        document.getElementById('remaining2').classList.remove('hidden');
        document.getElementById(
          'remaining2'
        ).textContent = `MAKE THE REMAINING ${
          4100 - lifeWeeks
        } USEFUL. DO THE THING.`;
      }
    }, i * 3);
  }
});
