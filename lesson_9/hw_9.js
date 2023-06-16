//
// - створити блок,
let block = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap','collapse','alpha','beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor='green';
block.style.color='red';
block.style.font= '20px';
// - додати цей блок в body.
document.body.appendChild(block);
// - клонувати його повністю, та додати клон в body.
let block_2 = block.cloneNode(true);
document.body.appendChild(block_2);
//
// - Є масив:
let menu = ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let uul = document.createElement('ul');
document.body.appendChild(uul);
let pt = [];
for (i=0;i<menu.length;i++) {
    pt.push(document.createElement('li'));
    pt[i].innerText=`${menu[i]}`;
    uul.appendChild(pt[i]);
};
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//let mainCont = document.createElement('div');
//document.body.appendChild(mainCont);
//let content = [];
//let corsTitle = [];
//let corsDur = [];
//for (i=0;i<coursesAndDurationArray.length;i++) {
//    content.push(document.createElement('div'));
//    mainCont.appendChild(content[i]);
//    corsTitle.push(document.createElement('h2'));
//    corsTitle[i].innerText = `${coursesAndDurationArray[i].title}`;
//    content[i].appendChild(corsTitle[i]);
//    corsDur.push(document.createElement('p'));
//    corsDur[i].innerText = `${coursesAndDurationArray[i].monthDuration}`;
//    content[i].appendChild(corsDur[i]);
//}

// Завдання робити через цикли.
//
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
let mainCont = document.createElement('div');
document.body.appendChild(mainCont);
let content = [];
let corsTitle = [];
let corsDur = [];
for (i=0;i<coursesAndDurationArray.length;i++) {
    content.push(document.createElement('div'));
    content[i].classList.add('item');
    mainCont.appendChild(content[i]);
    corsTitle.push(document.createElement('h2'));
    corsTitle[i].innerText = `${coursesAndDurationArray[i].title}`;
    corsTitle[i].classList.add('heading');
    content[i].appendChild(corsTitle[i]);
    corsDur.push(document.createElement('p'));
    corsDur[i].classList.add('description');
    corsDur[i].innerText = `${coursesAndDurationArray[i].monthDuration}`;
    content[i].appendChild(corsDur[i]);
}
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simps = document.createElement('div');
document.body.appendChild(simps);
let member = [];
let ah2 = [];
let inf = [];
let photo = [];
document.body.appendChild(simps);
simps.classList.add('simpsons');
for (i=0;i<simpsons.length;i++) {
    member.push(document.createElement('div'));
    member[i].classList.add('member');
    simps.appendChild(member[i]);
    ah2.push(document.createElement('h2'));
    ah2[i].innerText = `${simpsons[i].surname} ${simpsons[i].name} ${simpsons[i].age}`;
    inf.push(document.createElement('p'));
    inf[i].innerText = `${simpsons[i].info}`;
    photo.push(document.createElement('img'));
    photo[i].setAttribute('src', simpsons[i].photo);
    photo[i].setAttribute('alt', simpsons[i].name);
    member[i].append(ah2[i], inf[i],photo[i]);
}

// можу зробити ы та кщоб проытерувавти, але цей варівнт сподобався бо дає постійний доступ до елементівщо додаю

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
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

for (const coursesArrayElement of coursesArray) {
    let course = document.createElement('div');
    document.body.appendChild(course);
    let title = document.createElement('div');
    title.innerText = `${coursesArrayElement.title}`;
    title.style.textAlign = 'center';
    title.style.marginTop = '5%'
    let MH = document.createElement('div');
    MH.style.display = 'flex';
    MH.style.justifyContent = 'space-between';
    MH.style.padding = '2%'
    let monthDuration = document.createElement('div');
    monthDuration.innerText = `${coursesArrayElement.monthDuration}`;
    let hourDuration = document.createElement('div');
    hourDuration.innerText = `  ${coursesArrayElement.hourDuration}`;
    let modules = document.createElement("div");
    let modulist = document.createElement('ul');
    for (const mod of coursesArrayElement.modules) {
        let midule  =document.createElement('li');
        midule.innerText = `${mod}`;
        modulist.appendChild(midule);
    }
    course.append(title,MH,modules);
    MH.append(monthDuration,hourDuration);
    modules.appendChild(modulist);

}

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
