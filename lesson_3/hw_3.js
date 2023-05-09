// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (i=0; i<10; i++) {
    document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quia.</div>');
}
document.write('</br>');
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (i=0; i<10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quia. ${i} </div>`);
}
document.write('</br>');

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend',
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend',
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex'
];
let j = 0;
while (j<coursesTitleArray.length) {
    document.write(`<h1>${coursesTitleArray[j]}</h1>`);
    j++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

let k = 0;
while (k<coursesTitleArray.length) {
    document.write(`<h1>${coursesTitleArray[k]} --- ${k}</h1>`);
    k++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (i=0;i<listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//

for (i=0;i<products.length; i++) {
    document.write(`<div>`);
    document.write(`<h3 class="product-title">${products[i].title}. Price - ${products[i].price}</h3>`);
    document.write(`<img src="${products[i].image}" alt="" class="product-image">`);
    document.write(`</div>`);
}

//
//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true

for (i=0; i<users.length; i++) {
    if (users[i].status) {
        document.write(`<h3>${users[i].name} - ${users[i].age} -${users[i].status}</h3>`);
    }
}
document.write('</br>');
// - користувачів зі статусом false

for (i=0; i<users.length; i++) {
    if (!users[i].status) {
        document.write(`<h3>${users[i].name} - ${users[i].age} -${users[i].status}</h3>`);
    }
}
document.write('</br>');
// - користувачів які старші за 30 років

for (i=0; i<users.length; i++) {
    if (users[i].age>30) {
        document.write(`<h3>${users[i].name} - ${users[i].age} -${users[i].status}</h3>`);
    }
}