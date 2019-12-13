function exo3(){
    let h3Exo3 = document.getElementById('h3Exo3')
    let inputExo3 = document.getElementById('inputExo3')
    let btnExo3 = document.getElementById('btnExo3')
    btnExo3.addEventListener('click', event=>{
        h3Exo3.innerText = 'Welcome ' + inputExo3.value
        inputExo3.value = ''
    });
}
export{exo3}