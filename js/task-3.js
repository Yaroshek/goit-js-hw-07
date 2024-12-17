const fieldEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
fieldEl.addEventListener('input', () => {
    const trimValue = fieldEl.value.trim();
    nameEl.innerText = trimValue === '' ? 'Anonymous' : trimValue;
    });
