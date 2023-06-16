let uId = localStorage.getItem('userId');

let urla = `https://jsonplaceholder.typicode.com/users/${uId}`;
let user = requestData(urla);

user.then(user => {
        let mainDiv = document.getElementById('mainDiv');
        let userInfo = document.createElement('div');
        userInfo.classList.add('userInformation');
        mainDiv.appendChild(userInfo);
        let uI= document.createElement('div');
        uI.classList.add('block');
        let cI= document.createElement('div');
        cI.classList.add('block');
        let lI= document.createElement('div');
        lI.classList.add('block');
        userInfo.append(uI,cI,lI);
        let inu= document.createElement('div');
        inu.innerText = `${user.id}.${user.name}||${user.username}`;
        inu.classList.add('Names');
        let pw= document.createElement('div');
        pw.innerText = `Phone:${user.phone}     Website:${user.website}`;
        pw.classList.add('phoneWb');
        let em= document.createElement('div');
        em.innerText = `Email:${user.email}`;
        em.classList.add('email');
        uI.append(inu,pw,em);
        let cna= document.createElement('div');
        cna.innerText = `Company:${user.company.name}`;
        cna.classList.add('company');
        let cP= document.createElement('div');
        cP.innerText = `${user.company.catchPhrase}`;
        cP.classList.add('phoneWb');
        let bs= document.createElement('div');
        bs.innerText = `${user.company.bs}`;
        bs.classList.add('email');
        cI.append(cna,cP,bs);
        let adr = document.createElement('div');
        adr.innerText = `Address: ${user.address.suite},${user.address.street},${user.address.city}`;
        adr.classList.add('adress');
        let zip = document.createElement('div');
        zip.classList.add('phoneWb');
        zip.innerText = `Zipcode: ${user.address.zipcode}`;
        let geo = document.createElement('div');
        geo.classList.add('email');
        geo.innerText = `${user.address.geo.lat}x${user.address.geo.lng}`;
        lI.append(adr,zip,geo);

    console.log(user);


})

let postUrl = `https://jsonplaceholder.typicode.com/users/${uId}/posts`;
let posts = requestData(postUrl);

posts.then(post =>{
        setTimeout(() => {let mainDiv = document.getElementById('mainDiv');
                let postssssss = document.createElement('div');
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
                                let hPost = document.createElement('div');
                                hPost.classList.add('title');
                                hPost.innerText = `${po.title}`;
                                let postBut = document.createElement('div');
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

async function requestData(url) {
        let response = await fetch(url)
            .then(response => response.json());
        return response;
}