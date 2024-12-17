function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color');
const bkgrndColor = document.querySelector('body');
const spanValue = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  bkgrndColor.style.backgroundColor = getRandomHexColor();
  spanValue.innerText = bkgrndColor.style.backgroundColor;
});

