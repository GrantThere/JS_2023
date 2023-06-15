import {requestData, creatDiv} from './request.js';

let post = localStorage.getItem('postId');

let posurla = `https://jsonplaceholder.typicode.com/posts/${post}`;
let dPost = requestData(posurla);

dPost.then(post =>{
    let pt = creatDiv();
    pt.classList.add('allPost');
    document.body.appendChild(pt);
    let iTit = creatDiv();
    iTit.classList.add('postTitle');
    let num = creatDiv();
    num.innerText = ` ${post.userId}.${post.id}. `
    let tit = creatDiv();
    tit.innerText = `${post.title}`;
    iTit.append(num,tit);
    let bod = creatDiv();
    bod.innerText = `${post.body}`;
    bod.classList.add('postBody');
    pt.append(iTit,bod);
})

let commentsUrl =  `https://jsonplaceholder.typicode.com/posts/${post}/comments`;
let commetns = requestData(commentsUrl);

commetns.then(comment => {
    setTimeout(()=>{
        let commD = creatDiv();
        commD.classList.add('commentsBlock');
        document.body.appendChild(commD);
        let comBut = document.createElement('button');
        comBut.innerText = 'Comments';
        comBut.classList.add('commentsButon');
        let commLIst = document.createElement('ul');
        commLIst.classList.add('commentsList');
        commD.append(comBut,commLIst);
        comBut.onclick = function () {
            for (const commElement of comment) {
                let cli = document.createElement('li');
                commLIst.appendChild(cli);
                let num = creatDiv();
                num.innerText = `${commElement.postId}.${commElement.id}`;
                num.classList.add('num');
                let cName = creatDiv();
                cName.innerText = `${commElement.name}`;
                cName.classList.add('name');
                let cEmail = creatDiv();
                cEmail.innerText = `${commElement.email}`;
                cEmail.classList.add('email');
                let cBody = creatDiv();
                cBody.innerText = `${commElement.body}`;
                cBody.classList.add('commentBody');
                cli.append(num,cName,cEmail,cBody);
            }
        }

    },600)
})



