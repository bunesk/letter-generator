const shuffleArray = (values) => {
    let index = values.length;
    let randomIndex;
    
    while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;
        
        [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
    
    return values;
};

const alphabet = [];
for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
}
let unsorted = shuffleArray(alphabet);
let index = 0;

const addUsedLetter = (index) => {
    if (index === 0) {
        const usedLetters = document.getElementById('used-letters');
        usedLetters.classList.remove('hidden');

        const currentLetter = document.getElementById('current-letter');
        currentLetter.classList.remove('hidden');

        return unsorted[index];
    }
    if (index === 25) {
        const generate = document.getElementById('generate');
        generate.disabled = true;
    }
    return `, ${unsorted[index]}`;
};

const generateLetter = () => {
    document.querySelector('#current-letter span').textContent = unsorted[index];
    document.querySelector('#used-letters span').textContent += addUsedLetter(index);
    index++;
};

const resetLetters = () => {
    const usedLetters = document.getElementById('used-letters');
    const currentLetter = document.getElementById('current-letter');
    const usedLettersSpan = document.querySelector('#used-letters span');

    usedLetters.classList.add('hidden');
    currentLetter.classList.add('hidden');
    usedLettersSpan.textContent = '';

    index = 0;
    unsorted = shuffleArray(alphabet);

    const generate = document.getElementById('generate');
    generate.disabled = false;
};
