async function requestData(url) {
    let response = await fetch(url)
        .then(response => response.json());
    return response;
}


function creatDiv() {
   return  document.createElement('div');
}



export {requestData, creatDiv};
