"use strict"
// камень-ножницы-бумага
// let go = 0;
let comp = 0;
let play = 0;
let a = 0;
let playScore = 0;
let compScore = 0;
let id = 0;
let res = {};
let base = [];
const dataBase = [];

const refs = {
    mainContainerEl: document.querySelector('.main-container'),
    rockEl: document.querySelector('.rock-container'),
    paperEl: document.querySelector('.paper-container'),
    scissorsEl: document.querySelector('.scissors-container'),
}

initialData()

//Основное тело -бесконечный цикл прерываемый по команде от игрока
// do {
//     initialData();

//     if (a === null) {
//         break;
//     };

//     const resultText = (dataProcessing());

//     resultPrint.call(resultText);

//     resultsBase(resultText);




// }
// while (a !== null);

// console.table(dataBase);



// console.log('приходите исчо, для продолжения можно обновить страницу,счет будет обнулен');


//Выбор игрока, включение иконок
function initialData() {

    refs.rockEl.classList.remove('is-hidden');
    refs.paperEl.classList.remove('is-hidden');
    refs.scissorsEl.classList.remove('is-hidden');
    refs.rockEl.addEventListener('click', event => compChoice('rock'));
    refs.paperEl.addEventListener('click', event => compChoice('paper'));
    refs.scissorsEl.addEventListener('click', event => compChoice('scissors'));
};



function compChoice(playerChoice) {
    const comp = Math.ceil(Math.random() * 3);
    let compItem = '';
    switch (comp) {
        case (1):
            compItem = 'rock'
            break;
        case (2):
            compItem = 'paper'
            break;
        case (3):
            compItem = 'scissors'
            break;
    };
    dataProcessing(playerChoice, compItem)
}


//Обработка данных и выдача массива тектстовых данных результатов
function dataProcessing(playerChoice, compItem) {
    console.log(playerChoice, compItem);
    let playItem = '';
    // let compItem = '';
    let message = '';


    if (play === 1 && comp === 1) {
        message = 'Hичья';
    }

    else if (play === 1 && comp === 2) {
        message = 'Вы победили';
        playScore += 1;
    }
    else if (play === 1 && comp === 3) {
        message = 'Вы проиграли';
        compScore += 1;
    }
    else if (play === 2 && comp === 1) {
        message = 'Вы проиграли';
        compScore += 1;
    }
    else if (play === 2 && comp === 2) {
        message = 'Hичья';

    }
    else if (play === 2 && comp === 3) {
        message = 'Вы победили';
        playScore += 1;
    }
    else if (play === 3 && comp === 1) {
        message = 'Вы победили';
        playScore += 1;
    }
    else if (play === 3 && comp === 2) {
        message = 'Вы проиграли';
        compScore += 1;
    }
    else if (play === 3 && comp === 3) {
        message = 'Hичья';
    };

    switch (play) {
        case (1):
            playItem = 'камень'
            break;
        case (2):
            playItem = 'ножницы'
            break;
        case (3):
            playItem = 'бумага'
            break;

        default:
            break;
    };
    switch (comp) {
        case (1):
            compItem = 'камень'
            break;
        case (2):
            compItem = 'ножницы'
            break;
        case (3):
            compItem = 'бумага'
            break;

        default:
            break;
    };

    const result = {
        playItem,
        compItem,
        message,
        playScore,
        compScore,
    };

    return result;
};


// формит массив
function resultsBase(innerArray) {

    id += 1;
    dataBase.push({ ...{ id }, ...innerArray });
    return dataBase;

};

//выводит результат каждого тура
function resultPrint() {
    console.log(`${this.message}

    вы выбрали-${this.playItem}   компьютер выбрал-${this.compItem}

    общий счет-игрок${this.playScore} комп${this.compScore}`);
};


//будет выводить таблицу результатов после игры
function printAllResult() {
}







