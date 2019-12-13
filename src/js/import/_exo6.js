function exo6() {
    let input1Exo6 = document.getElementById('input1Exo6')
    let input2Exo6 = document.getElementById('input2Exo6')
    let input3Exo6 = document.getElementById('input3Exo6')
    let btnExo6 = document.getElementById('btnExo6')

    btnExo6.addEventListener('click', event => {
        input3Exo6.value = Number(input1Exo6.value) + Number(input2Exo6.value)
    })


    let span1Calc = document.getElementById('span1Calc')
    let inputCalc = document.getElementById('inputCalc')
    let btnEgal = document.getElementById('btnEgal')
    let btnC = document.getElementById('grandC')
    let tabChiffres = document.querySelectorAll('.chiffres')
    let tabOperateurs = document.querySelectorAll('.operateurs')

    let varCalc1
    let varCalc2
    let temporaire

    tabChiffres.forEach(button => {
        button.addEventListener('click', event => {
            inputCalc.value += button.innerText
        });
    });
    tabOperateurs.forEach(operateur => {
        operateur.addEventListener('click', event => {
            varCalc1 = inputCalc.value
            inputCalc.value += operateur.innerText
            temporaire = operateur.getAttribute('id')
        })
    });
    btnEgal.addEventListener('click', event => {
        // let temp = eval (inputCalc.value)
        // span1Calc.innerText = inputCalc.value + '=' + temp
        varCalc2 = inputCalc.value.substr(varCalc1.length + 1)
        let rep
        switch (temporaire) {
            case "plus":
                rep = Number(varCalc1) + Number(varCalc2);
                span1Calc.innerText = inputCalc.value + '=' + rep
                break;
            case "moins":
                rep = Number(varCalc1) - Number(varCalc2);
                span1Calc.innerText = inputCalc.value + '=' + rep
                break;
            case "fois":
                rep = Number(varCalc1) * Number(varCalc2);
                span1Calc.innerText = inputCalc.value + '=' + rep
                break;
            case "diviser":
                rep = Number(varCalc1) / Number(varCalc2);
                span1Calc.innerText = inputCalc.value + '=' + rep
                break;
        }
        inputCalc.value = ''
    })
    btnC.addEventListener('click', event => {
        inputCalc.value = ""
        span1Calc.innerText = "?"
    })

}
export {
    exo6
}