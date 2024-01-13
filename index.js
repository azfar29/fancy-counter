const buttonIncreaseEl = document.querySelector('.counter__button-increase');
const buttonDecreaseEl = document.querySelector('.counter__button-decrease');
const valueEl = document.querySelector('.counter__value');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterEl = document.querySelector('.counter');
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', () => {
    valueEl.textContent = 0;
    counterEl.classList.remove('counter__limit');
    counterTitleEl.textContent = 'Fancy Counter';
    buttonIncreaseEl.disabled = false;
    buttonDecreaseEl.disabled = false;

    //unfocus (blur)
    resetButtonEl.blur();
});

const incrementCounter = () => {
    const currentValue = valueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;

    if (newValue > 5) {   
        newValue = 5;
        counterEl.classList.add('counter__limit'); //classlist do not need dot
        counterTitleEl.innerHTML = 'Limit! Buy <b>pro</b> for >5';
        buttonIncreaseEl.disabled = true;
        buttonDecreaseEl.disabled = true;
    }
    valueEl.textContent = newValue;
    //unfocus (blur)
    resetButtonEl.blur();    
};

const decrementCounter = () => {
    const currentValue = valueEl.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1;

    if(newValue < 0 ) {
        newValue = 0; 
    }
    valueEl.textContent = newValue;
    //unfocus (blur)
    resetButtonEl.blur();    
};

buttonIncreaseEl.addEventListener('click', incrementCounter);

buttonDecreaseEl.addEventListener('click', decrementCounter);

document.addEventListener('keydown', incrementCounter); 