function exo5() {
    let divExo5 = document.getElementById('divExo5')
    let btnExo5 = document.getElementById('btnExo5')
    


    btnExo5.addEventListener('click', event => {
        let imgExo5 = document.createElement('img')
        imgExo5.setAttribute('src', './public/img/egg.png')
        imgExo5.style.width = '10%'
        divExo5.appendChild(imgExo5);
    })
    
    

    

}

export {
    exo5
}