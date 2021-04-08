const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const start = document.querySelector('[data-action="start"]')
const stop = document.querySelector('[data-action="stop"]')
const body = document.querySelector('body')
let intervaId = null;
const randomIntegerFromInterval = (min, max) => {
     min = 0;
     max = colors.length-1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
function isActive(){
    intervaId = setInterval(() => {
        body.style.backgroundColor=colors[randomIntegerFromInterval()]
    }, 1000);
    start.removeEventListener('click', isActive);
}
function notActive() {
    clearInterval(intervaId);
    start.addEventListener('click', isActive);
  }
  stop.addEventListener('click', notActive)
  start.addEventListener('click', isActive);
  

