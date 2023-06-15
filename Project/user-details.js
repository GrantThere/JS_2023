import {requestData,creatDiv} from './request.js';

let uId = localStorage.getItem('userId');

let urla = `https://jsonplaceholder.typicode.com/users/${uId}`;
let user = requestData(urla);

user.then(user => {
        let mainDiv = document.getElementById('mainDiv');
        let userInfo = creatDiv();
        userInfo.classList.add('userInformation');
        mainDiv.appendChild(userInfo);
        let uI= creatDiv();
        uI.classList.add('block');
        let cI= creatDiv();
        cI.classList.add('block');
        let lI= creatDiv();
        lI.classList.add('block');
        userInfo.append(uI,cI,lI);
        let inu= creatDiv();
        inu.innerText = `${user.id}.${user.name}||${user.username}`;
        inu.classList.add('Names');
        let pw= creatDiv();
        pw.innerText = `Phone:${user.phone}     Website:${user.website}`;
        pw.classList.add('phoneWb');
        let em= creatDiv();
        em.innerText = `Email:${user.email}`;
        em.classList.add('email');
        uI.append(inu,pw,em);
        let cna= creatDiv();
        cna.innerText = `Company:${user.company.name}`;
        cna.classList.add('company');
        let cP= creatDiv();
        cP.innerText = `${user.company.catchPhrase}`;
        cP.classList.add('phoneWb');
        let bs= creatDiv();
        bs.innerText = `${user.company.bs}`;
        bs.classList.add('email');
        cI.append(cna,cP,bs);
        let adr = creatDiv();
        adr.innerText = `Address: ${user.address.suite},${user.address.street},${user.address.city}`;
        adr.classList.add('adress');
        let zip = creatDiv();
        zip.classList.add('phoneWb');
        zip.innerText = `Zipcode: ${user.address.zipcode}`;
        let geo = creatDiv();
        geo.classList.add('email');
        geo.innerText = `${user.address.geo.lat}x${user.address.geo.lng}`;
        lI.append(adr,zip,geo);

    console.log(user);


})

let postUrl = `https://jsonplaceholder.typicode.com/users/${uId}/posts`;
let posts = requestData(postUrl);

posts.then(post =>{
        setTimeout(() => {let mainDiv = document.getElementById('mainDiv');
                let postssssss = creatDiv();
                postssssss.classList.add('userPosts');
                mainDiv.appendChild(postssssss);
                let pBtn = document.createElement('button');
                pBtn.innerText = 'Users posts';
                pBtn.classList.add('postTitles');
                postssssss.appendChild(pBtn);
                pBtn.onclick = function () {
                        let postTitleList = document.createElement('ul');
                        postssssss.appendChild(postTitleList);
                        for (const po of post) {
                                let postTitle = document.createElement('li');
                                postTitleList.appendChild(postTitle);
                                let hPost = creatDiv();
                                hPost.classList.add('title');
                                hPost.innerText = `${po.title}`;
                                let postBut = creatDiv();
                                postBut.classList.add('postBut');
                                postTitle.append(hPost,postBut);
                                let postUrla = document.createElement('a');
                                postUrla.innerText = 'Details';
                                postUrla.href = 'post-details.html';
                                postBut.appendChild(postUrla);
                                localStorage.setItem('postId',po.id);
                        }
                };}, 50);
})