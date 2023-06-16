let urla = 'https://jsonplaceholder.typicode.com/users';
let users = requestData(urla);

users.then(user => {
    for (const userElement of user) {
        console.log(userElement);
        let usrD = document.createElement('div');
        let line = document.createElement('hr');
        usrD.classList.add('wrap');
        document.body.append(usrD,line);
        let id = document.createElement('div');
        id.innerText = `${userElement.id}`;
        id.style.fontSize= '20px';
        let name = document.createElement('div');
        name.innerText = `${userElement.name}`;
        name.style.fontSize= '25px';
        let detailsBt = document.createElement('div');
        detailsBt.style.backgroundColor = 'cyan';
        detailsBt.style.borderRadius = '10px';
        let ssl = document.createElement('a');
        ssl.classList.add('detBut');
        ssl.innerText = 'User details';
        ssl.href = 'user-details.html';
        ssl.style.paddingLeft = '15%';
        detailsBt.style.width = '130px';
        detailsBt.appendChild(ssl);
        usrD.append(id,name,detailsBt);
        ssl.onclick = function () {
            localStorage.setItem('userId',`${userElement.id}`)
        }
    }
});


async function requestData(url) {
    let response = await fetch(url)
        .then(response => response.json());
    return response;
}






