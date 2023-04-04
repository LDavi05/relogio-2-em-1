const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const hourDigital = document.getElementById('horas');
const minuteDigital = document.getElementById('minutos');
const secondDigital = document.getElementById('segundos');
const switcherBTN = document.querySelector('.switcher');
const handClock = document.querySelector('.hand-clock');
const digitalClock = document.querySelector('.digital-clock');

const getTime = () => {
  const date = new Date();
  
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
}

setInterval(() => {
  const {seconds, minutes, hours} = getTime();
  
  secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
  minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
  hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
}, 1000);

setInterval(() => {
  const {seconds, minutes, hours} = getTime();
  
  let hr = hours;
  let min = minutes;
  let s = seconds;
  
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;
  
  hourDigital.textContent = hr;
  minuteDigital.textContent = min;
  secondDigital.textContent = s;
});

const changeClock = () => {
  if (handClock.style.display === 'flex' && digitalClock.style.display === 'none') {
    handClock.style.display = 'none';
    digitalClock.style.display = 'flex';
  } else {
    handClock.style.display = 'flex';
    digitalClock.style.display = 'none';
  }
    
}

switcherBTN.addEventListener('click', changeClock);
