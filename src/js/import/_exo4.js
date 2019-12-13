function exo4(){
    let btn1Exo4 = document.getElementById('btn1Exo4')
    let btn2Exo4 = document.getElementById('btn2Exo4')
    let carreRouge = document.getElementById('carreRouge')
    let carreRouge2 = document.getElementById('carreRouge2')
    
    
    
    let z = 0
    btn1Exo4.addEventListener('click', event=>{
        z++
        if(z%2==1){
            carreRouge.style.display = 'none'
            carreRouge2.style.display = 'block'
        }else{
            carreRouge.style.display = 'block'
            carreRouge2.style.display = 'none'
        }
        btn2Exo4.innerText = 'Nombres de click ' + z
    })
}
export{exo4}