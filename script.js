const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

    btn.addEventListener('click', vowelCounter);

    function vowelCounter() {
        const word = document.querySelector('.input-text').value;
        const array =[];
    
        for(let i = 0; i < word.length; i++){
            if(/[aeiou]/i.test(word[i])){
                array.push(word[i])
            }
        }

        result.textContent = `"${word}" has ${array.length} vowels in it`;
    }

    