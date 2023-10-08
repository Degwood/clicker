// let user = 'Ivan';
// let age = 19 ;
// let message = 'Hello';
// alert (user+' '+age+' '+message);


// let admin;
// let user;
// user = 'Ivan';
// admin = user;
// alert (admin);


// let message1 = 'привет!';
// let message2 = 'как дела?';
// let message3 = 'доброе утро';
// let messages = message1 + ' ' + message2 + ' ' + message3;
//? // alert (message1+' '+message2+' '+message3);
//? alert (messages);


// let str = "Привіт";
// let str2 = 'Одинарні лапки також дозволяються';
// let phrase = `так ${str2} можна вставляти ${str}`;
// alert (phrase);

//! dataTypes 
// Number - числа
// Bigint - большие числа (вконце 'n')
// String - строка
// True False - возврат true/false

// Null - ничего
// Undefined - переменная которую обьявили но не присвоили никакого значения

// Object - обьекты

// typeof - для определения типа переменной

// let string = 'ABC';
// typeof string;
// console.log (string);

// let num1 = '8';
// let num2 = '2';
// let result = num1-num2;
// console.log (result);
// alert (result);


//? Математика
// let n = 2;
// n = n + 5;
// n = n * 2;

// let n = 2;
// n += 5; // тепер n = 7 (те ж саме, що n = n + 5)
// n *= 2; // тепер n = 14 (те ж саме, що n = n * 2)

// alert( n ); // 14


let button = document.getElementById('button');
let clickCountDisplay = document.getElementById('clickCount');
let buttondel = document.getElementById('buttondel');
let resetButton = document.getElementById('resetButton');

let clickCount = 0;
button.addEventListener('click', function () {
clickCount ++;
clickCountDisplay.textContent = clickCount;
  });

buttondel.addEventListener('click', function () {
clickCount --;
clickCountDisplay.textContent = clickCount;
});

resetButton.addEventListener('click', function () {
clickCount = 0;
clickCountDisplay.textContent = clickCount;
})



  


