function exo1(){
    let btnExo1 = document.getElementById('btnExo1');
    let h3Exo1 = document.getElementById('h3Exo1');
    
    btnExo1.addEventListener('click', event => {
        h3Exo1.style.backgroundColor = 'blue'
        h3Exo1.style.color = 'red'
        h3Exo1.innerHTML = 'Le titre changé'
        btnExo1.style.display = 'none'
    });
}
export {exo1}