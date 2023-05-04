// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let ara = [1, 2, 3, 4 , 5 , 6 , 7 , 8 , 9 , 10];
for (i=0; i<ara.length; i++)  {
    console.log(ara[i]);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let o1 = {
    title: 'aba',
    pageCount: 100,
    genre: 'aaaa'
}
let o2 = {
    title: 'aga',
    pageCount: 200,
    genre: 'bbbb'
}
let o3 = {
    title: 'ama',
    pageCount: 300,
    genre: 'cccc'
}
console.log(o1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

o1.authors = [{name:'Well', age:19},{name: 'None', age: 29}
];
o2.authors = [{name:'Cell', age:39},{name: 'Lone', age: 27}
];
o3.authors = [{name:'Nell', age:69},{name: 'Mone', age: 52}
];

console.log(o2);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:"qw",username:'QWR',password:'afewGF'},
    {name:"rw",username:'rhWR',password:'herh'},
    {name:"gw",username:'QheR',password:'wef'},
    {name:"nw",username:'QehWR',password:'ahd'},
    {name:"ew",username:'er',password:'aret'},
    {name:"jw",username:'wrty',password:'WER'},
    {name:"rtw",username:'he',password:'WER'},
    {name:"wew",username:'qwe',password:'dfgh'},
    {name:"bw",username:'qewg',password:'fsf3'},
    {name:"jw",username:'her',password:'sf'},
];
for (i=0;i<users.length;i++ ) {
  console.log(users[i].password)
};

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x===0) {
    alert("Невірно");
} else {
    alert('Вірно');
};

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 30;
if (time<16) {
    alert("Перша чверть");
} else {
    if (time<31) {
        alert("Друга чверть");
    } else {
        if (time<46) {
            alert("Третя чверть");
        } else {
            alert("Четверта чверть");
        }
    }
};

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 10;
if (day<11) {
    console.log('Перша декада');
} else {
    if (day<21) {
        console.log('Друга декада');
    } else {
        console.log('Третя декада');
    }
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNum = prompt('Введіть номер дня тижня');

switch (dayNum) {
    case '1':
        console.log('Sunday');
        break;
    case '2':
        console.log('Monday');
        break;
    case '3':
        console.log('Tuesday');
        break;
    case '4':
        console.log('Wensday');
        break;
    case '5':
        console.log('Thursday');
        break;
    case '6':
        console.log('Friday');
        break;
    case '7':
        console.log('Saturday');
        break;
    default:
        console.log('????');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = prompt('First');
let num2 = prompt('Second');

if (num1===num2) {
    console.log('Введені числа рівні');
} else {
    if (num1>num2) {
        console.log('Перше число більше за друге');
    } else {
        console.log('Перше число менше за друге');
    }
};

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let iks = undefined;
if (iks===undefined||iks===null) {
    iks = 'default';
}
console.log(iks);

//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (i=0;i<7;i++) {
    if (coursesAndDurationArray[i].monthDuration>5) {
        console.log(coursesAndDurationArray[i].title+' Супер')
    }
};

