const studyCards = document.querySelector('.study-cards');
const flipCard = document.querySelector('.flip-card');
const cardFront = document.querySelector('#card-front');
const cardBack = document.querySelector('#card-back');
const cardFrontContent = document.querySelector('#card-front h1');
const cardBackTranslate = document.querySelector('#card-back h1');
const cardBackExample = document.querySelector('#card-back span');
const nextButton = document.querySelector('#next');
const backButton = document.querySelector('#back');
const number = document.querySelector('#current-word');
const examButton = document.querySelector('#exam');
const allExamCards = document.querySelector('#exam-cards');




//Режим тренировки
// создаю карточки

const cards = [
    { engWord: 'apple', translateWord: 'яблоко', example: 'Eating apples are grown in the south, as well as the vine.' },
    { engWord: 'street', translateWord: 'улица', example: 'October street is the central street of the city.' },
    { engWord: 'popcorn', translateWord: 'попкорн', example: 'They do movie night with popcorn.' },
    { engWord: 'cat', translateWord: 'кот', example: 'Your cat shows affection to you.' },
    { engWord: 'home', translateWord: 'дом', example: 'Every individual plans to have a home someday.' },
];





// Карточки на одной стороне (#card-front) содержат иностранное слово, а на другой (#card-back) — его перевод и пример использования

function setCard(card) {
    cardFrontContent.textContent = card.engWord;
    cardBackTranslate.textContent = card.translateWord;
    cardBackExample.textContent = card.example;
    //console.log(cardFrontContent)
    //console.log(card.engWord)
}

setCard(cards[0]);

// По клику переворачиваются карточки (hint: добавь класс .active элементу .flip-card)

studyCards.addEventListener("click", function(activate) {

    const element = activate.target.closest(".flip-card");
    
    if (element) {
        element.classList.toggle('active');
    } 

}); 

//С помощью стрелок можно листать карточки вперед-назад, будто слайдер

let count = 0;

function goBack() {

    if (count === 0) {
        //Если дошли до границы (к примеру, просматриваем первое или последнее слово), то стрелка вперед (или назад) блокируется
        backButton.disabled = true;
    } else {
        count -= 1;
        //Отображается номер текущего слова (отсчет обязательно идет с единицы)
        number.textContent = count + 1;
        nextButton.disabled = false;
    }

    setCard(cards[count]);

}; 

function goForward() {

    if (count === cards.length - 1) {
        //Если дошли до границы (к примеру, просматриваем первое или последнее слово), то стрелка вперед (или назад) блокируется
        nextButton.disabled = true;
    } else {
        count += 1;
        //Отображается номер текущего слова (отсчет обязательно идет с единицы)
        number.textContent = count + 1;
        backButton.disabled = false;
    }

    setCard(cards[count]);
};

backButton.addEventListener("click", goBack); 
nextButton.addEventListener("click", goForward);


//console.log(cards);
/*
function shuffle(item) {
    let currentIndex = duplicatedCards.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [duplicatedCards[currentIndex], duplicatedCards[randomIndex]] = [
        duplicatedCards[randomIndex], duplicatedCards[currentIndex]];
    }
    return duplicatedCards;   
}
*/


//При клике на кнопку «Тестирование» осуществляется переход в режим проверки знаний

examButton.addEventListener("click", function() {

    studyCards.classList.add('hidden');


    function createCardsGrid() {

        const engWordsArray = cards.map ((item) => item.engWord);
        const translationsArray = cards.map ((item) => item.translateWord);
        const copyCards = [ ... cards];
        const duplicatedCards = copyCards.concat(copyCards);
        
       

        duplicatedCards.forEach(() => {
            
            //shuffleDuplicatedCards(duplicatedCards);
            const examCard = document.createElement('div');
            examCard.classList.add('card');
            const words = document.createElement('p');
            

            allExamCards.append(examCard);
            examCard.append(words);
            return examCard;              
            
        })

        

        
        
        /*
        const translation = document.createElement('p');
        translation.textContent = card.translateWord;*/
        
        //console.log(examCard)
         
        
        return allExamCards;
    }
    
    
  createCardsGrid();
});


/*
    function getRandomIndex() {
        for ( let i = 0; i < cards.length ; i++ ) {
            return Math.floor(Math.random() * cards.length)    
        };
    }
    getRandomIndex()    
    console.log([i])
    */
    //console.log(cards[i])

    /*
    for (i = 0, i < cards.length; i++;) {
        let randomIndex = Math.floor(Math.random() * cards.length)
        let temp = cards.length[i];
        cards.length[i] = cards.length[randomIndex];
        cards.length[randomIndex] = temp;

    }

    cards.forEach((card) => {
         console.log(card);
    })

    //Отображаются карточки слов и их переводов (определений) в случайном порядке «рубашками вверх»

    /*
    function createCardsGrid() {


        cards.forEach((card) => {
            
            shuffleCards(cards);

            const examCard = document.createElement('div');
            examCard.classList.add('card');

            const word = document.createElement('h1');
            word.textContent = card.engWord;
            word.classList.add('card');
            examCard.append(word);
            //console.log(word)
            allExamCards.append(examCard);

           

            return examCard;  

        })

        const duplicatedCards = cards.slice(0);

        duplicatedCards.forEach((duplicatedCard) => {

            const translationCards = document.createElement('div');
            translationCards.classList.add('card');
    
            const translation = document.createElement('h1');
            translation.textContent = duplicatedCard.translateWord;
            translation.classList.add('card');
            translationCards.append(translation);
            
            allExamCards.append(translationCards);
            //console.log(translation)

            return translationCards;  

        })
       

    }
    
    createCardsGrid();
  
});
*/

/*
    function getRandomIndex() {
        for ( let i = 0; i < cards.length ; i++ ) {
            return Math.floor(Math.random() * cards.length)    
        };
    }
    getRandomIndex()    
    console.log([i])
    */
    //console.log(cards[i])

    /*
    for (i = 0, i < cards.length; i++;) {
        let randomIndex = Math.floor(Math.random() * cards.length)
        let temp = cards.length[i];
        cards.length[i] = cards.length[randomIndex];
        cards.length[randomIndex] = temp;

    }

    cards.forEach((card) => {
         console.log(card);
    })
   */
   
    
   


    /*
    //word.textContent = card.translateWord;

    const examCards = item => {
        const examCardsEngWord = document.createElement('h1');
        examCardsEngWord.textContent = item.engWord;
        const examCardsTranslate = document.createElement('h1');
        examCardsTranslate.textContent = item.translateWord;
    }

    examCards(cards[0]);
    examCards.append(item)
    */

    /*
    cards.forEach((item) => {
        item.classList.add('card');

         const itemExamCards = item => {
             itemExamCards.textContent = item.engWord;
        }
        console.log(itemExamCards)
        examCards.append(itemExamCards);
  
    })*/

//Режим проверки знаний
//Отображаются карточки слов и их переводов (определений) в случайном порядке «рубашками вверх»



/*
//I write down the words, translate, example - Записываю слова, перевод, примеры

class examCard {

    constructor(engWord, translateWord) {
        this.engWord = engWord;
        this.translateWord = translateWord;
        this.example = example;
    }
};

const apple = new Word('apple', 'яблоко', 'Eating apples are grown in the south, as well as the vine.');
const street = new Word('street', 'улица', 'October street is the central street of the city.');
const popcorn = new Word('popcorn', 'попкорн', 'They do movie night with popcorn.');
const cat = new Word('cat', 'кот', 'Your cat shows affection to you.');
const home = new Word('home', 'дом', 'Every individual plans to have a home someday.');

const arrayWords = [apple, street, popcorn, cat, home];
//Parameter output - Вывод параметров
console.log(this.Word.engWord)
//console.log(apple.translateWord)
//console.log(apple.example)

*/

/*
        cards.forEach((card) => {

            const duplicatedCards = cards.slice(0);
            const translationCards = document.createElement('div');
            translationCards.classList.add('card');

            const translation = document.createElement('h1');
            translation.textContent = card.translateWord;
            translation.classList.add('card');
            translationCards.append(translation);
            
            allExamCards.append(duplicatedCards);
            console.log(duplicatedCards)

            return duplicatedCards;  

        })
        */

       
        //const duplicatedCards = cards.slice(0);
        //console.log(duplicatedCards)








