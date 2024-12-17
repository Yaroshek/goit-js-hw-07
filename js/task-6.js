function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    elements.push(box);
  }
  boxesContainer.append(...elements); 
}
function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(inputEl.value); 
  if (amount >= 1 && amount <= 100) { 
    createBoxes(amount); 
    inputEl.value = ''; 
  } else {
  inputEl.value = ''; 
  }
});

destroyBtn.addEventListener('click', destroyBoxes);