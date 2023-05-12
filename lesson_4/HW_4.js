// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function S_pr(a,b) {
    return a*b;
}

console.log(S_pr(2,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function S_c(r) {
    return Math.PI*Math.pow(r,2);
}

console.log(S_c(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function S_cyl(h,r) {
    return h*2*Math.PI*r + 2*S_c(r);
}

console.log(S_cyl(3,1));

// - створити функцію яка приймає масив та виводить кожен його елемент

function Elements_of_array(array) {
    for (i=0;i<array.length;i++) {
        console.log(array[i]);
    }
}

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
]

Elements_of_array(coursesTitleArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function parag(text) {
    document.write(`<p>${text}</p>`);
}

parag('sdfnsogdfajsfpap');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list_one_txt(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

list_one_txt('rerererer');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list_number_txt(text,num) {
    document.write(`<ul>`);
    for (i=0;i<num;i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}


list_number_txt('wwwwwwwwwwwww',8);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function list_elements_ara(array) {
    document.write(`<ul>`);
    for (i=0;i<array.length;i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

list_elements_ara(coursesTitleArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function list_of_card(array) {
    for (i=0;i<array.length;i++) {
        document.write(`<div>`);
        document.write(`<h2>${array[i].name}</h2>`);
        document.write(`<h3>${array[i].id}</h3>`);
        document.write(`<h4>${array[i].age}</h4>`);
        document.write(`</div>`);
    }
}



// - створити функцію яка повертає найменьше число з масиву

function min_ara_elem(array) {
    let min=array[0];
    for (i=1; i<array.length; i++) {
        if (min>array[i]) {
            min = array[i];
        }
    }
    return min;
}

let er=[1,4,0,-2,7,3];
console.log(min_ara_elem(er));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(array) {
    let summ=0;
    for (i=0; i<array.length; i++) {
        summ+=array[i];
    }
    return summ;
}

console.log(sum(er));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(array,in1,in2) {
    let prom = 0;
    prom = array[in1];
    array[in1] = array[in2];
    array[in2] = prom;
}

swap(er,1,3);
console.log(er);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (i=0;i<currencyValues.length;i++) {
        if (exchangeCurrency===currencyValues[i].currency) {
            return sumUAH/currencyValues[i].value;
        }
    }
}

let exs = [{currency:'USD',value:40},{currency:'EUR',value:42}];
console.log(exchange(100,exs,'EUR'));