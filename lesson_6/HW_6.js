// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let t_one = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (i=0; i<t_one.length; i++) {
    console.log(t_one[i].length);
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let t_two = [];
for (i=0; i<t_one.length; i++) {
    t_two[i] = t_one[i].toUpperCase();
    console.log(t_two[i]);
}

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let t_three = [];
for (i=0; i<t_one.length; i++) {
    t_three[i] = t_two[i].toLowerCase();
    console.log(t_three[i]);
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let str = ' dirty string   ';
console.log(str.replaceAll(' ',''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let strr = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//

function stringToarray(string) {
    return  string.split(' ');
}
console.log(stringToarray(strr));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let num = [10,8,-7,55,987,-1011,0,1050,0];
let sttr = num.map(num => num.toString());
console.log(sttr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
let nums = [11,21,3];
function sortNums(nums,direction) {
    switch (direction) {
        case 'ascending':
            return nums.sort((n1,n2) => n1-n2);
        case 'descending':
            return nums.sort((n1,n2) => n2-n1);
    }
}
console.log(sortNums(nums,'descending'));


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((c1,c2) => c2.monthDuration-c1.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration>5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log(coursesAndDurationArray.map((value,index) => ({...value, id:index})));

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
let cards = [
    {cardSuit:'spade',value:6,color:'red'},
    {cardSuit:'spade',value:7,color:'red'},
    {cardSuit:'spade',value:8,color:'red'},
    {cardSuit:'spade',value:9,color:'red'},
    {cardSuit:'spade',value:10,color:'red'},
    {cardSuit:'spade',value:'ace',color:'red'},
    {cardSuit:'spade',value:'jack',color:'red'},
    {cardSuit:'spade',value:'queen',color:'red'},
    {cardSuit:'spade',value:'king',color:'red'},
    {cardSuit:'spade',value:'joker',color:'red'},
    {cardSuit:'heart',value:6,color:'red'},
    {cardSuit:'heart',value:7,color:'red'},
    {cardSuit:'heart',value:8,color:'red'},
    {cardSuit:'heart',value:9,color:'red'},
    {cardSuit:'heart',value:10,color:'red'},
    {cardSuit:'heart',value:'ace',color:'red'},
    {cardSuit:'heart',value:'jack',color:'red'},
    {cardSuit:'heart',value:'queen',color:'red'},
    {cardSuit:'heart',value:'king',color:'red'},
    {cardSuit:'heart',value:'joker',color:'red'},
    {cardSuit:'diamond',value:6,color:'black'},
    {cardSuit:'diamond',value:7,color:'black'},
    {cardSuit:'diamond',value:8,color:'black'},
    {cardSuit:'diamond',value:9,color:'black'},
    {cardSuit:'diamond',value:10,color:'black'},
    {cardSuit:'diamond',value:'ace',color:'black'},
    {cardSuit:'diamond',value:'jack',color:'black'},
    {cardSuit:'diamond',value:'queen',color:'black'},
    {cardSuit:'diamond',value:'king',color:'black'},
    {cardSuit:'diamond',value:'joker',color:'black'},
    {cardSuit:'clubs',value:6,color:'black'},
    {cardSuit:'clubs',value:7,color:'black'},
    {cardSuit:'clubs',value:8,color:'black'},
    {cardSuit:'clubs',value:9,color:'black'},
    {cardSuit:'clubs',value:10,color:'black'},
    {cardSuit:'clubs',value:'ace',color:'black'},
    {cardSuit:'clubs',value:'jack',color:'black'},
    {cardSuit:'clubs',value:'queen',color:'black'},
    {cardSuit:'clubs',value:'king',color:'black'},
    {cardSuit:'clubs',value:'joker',color:'black'},
]
// - знайти піковий туз
console.log(cards.filter(card=>card.cardSuit==='spade'&& card.value==='joker'));
// - всі шістки
console.log(cards.filter(card=>card.value===6));
// - всі червоні карти
console.log(cards.filter(card=>card.color==='red'));
// - всі буби
console.log(cards.filter(card=>card.cardSuit==='diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(card=>[9,10,'ace', 'jack', 'queen','king', 'joker'].includes(card.value) && card.cardSuit==='clubs'));
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(cards.reduce((accumulator,card)=>{
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]}));
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter(course => course.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter(course => course.modules.includes('docker')));