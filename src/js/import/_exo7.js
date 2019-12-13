function exo7() {
    let buttonsTodo = document.querySelectorAll('.btnTodo')
    let divTodo = document.getElementById('divTodo')
    let inputTodo = document.getElementById('inputTodo')
    let tabX = []
    let divVenere
    let p
    let checkbox
    let span
    let x
    let tabFait = []
    let tabP = []



    inputTodo.addEventListener('focus', () => {
        document.addEventListener('keypress', event => {
            if (event.key == 'Enter' && inputTodo.value != '') {
                divVenere = document.createElement('div')
                divVenere.classList.add('divTodo2')
                p = document.createElement('p')
                p.innerText = inputTodo.value
                inputTodo.value = ''
                checkbox = document.createElement('input')
                checkbox.type = 'checkbox'
                span = document.createElement('span')
                x = document.createTextNode('\u00D7')

                divVenere.appendChild(checkbox)
                tabP.push(p)
                divVenere.appendChild(p)
                span.appendChild(x)
                tabX.push(span)
                divVenere.appendChild(span)
                tabFait.push(divVenere)
                divTodo.appendChild(divVenere)
            }

            for (let i = 0; i < tabX.length; i++) {
                tabX[i].onclick = function () {
                    let div = this.parentElement;
                    div.remove()
                }
            }
            tabP.forEach(e => {
                e.ondblclick = () => {
                    let input = document.createElement('input')
                    input.setAttribute ('type', 'text')
                    input.value = e.innerText
                    e.parentElement.replaceChild(input, e);
                    
                    input.addEventListener('keypress', event=>{    
                        if(event.key == 'Enter'){
                            let p = document.createElement('p')
                            p.innerText = input.value
                            input.parentElement.replaceChild(p, input)
                        }
                    })
                }
            });
        })
    })

    divTodo.addEventListener('click', event => {
        tabFait.forEach(element => {
            if (element.children[0].checked) {
                element.style.backgroundColor = 'green'
            } else {
                element.style.backgroundColor = ''
            }
        })
    })


    buttonsTodo[0].addEventListener('click', () => {
        buttonsTodo[0].style.backgroundColor = 'blue'
        buttonsTodo[0].style.color = 'white'

        buttonsTodo[1].style.backgroundColor = ''
        buttonsTodo[1].style.color = 'blue'
        
        buttonsTodo[2].style.backgroundColor = ''
        buttonsTodo[2].style.color = 'blue'
        tabFait.forEach(element => {
            
            element.style.display = 'flex'

        })
    })

    buttonsTodo[1].addEventListener('click', () => {
        buttonsTodo[1].style.backgroundColor = 'blue'
        buttonsTodo[1].style.color = 'white'

        buttonsTodo[0].style.backgroundColor = ''
        buttonsTodo[0].style.color = 'blue'
        
        buttonsTodo[2].style.backgroundColor = ''
        buttonsTodo[2].style.color = 'blue'
        tabFait.forEach(element => {
            if (element.children[0].checked) {
                element.style.display = 'flex'
            } else {
                element.style.display = 'none'
            }
        })
    })

    buttonsTodo[2].addEventListener('click', () => {
        buttonsTodo[2].style.backgroundColor = 'blue'
        buttonsTodo[2].style.color = 'white'

        buttonsTodo[0].style.backgroundColor = ''
        buttonsTodo[0].style.color = 'blue'
        
        buttonsTodo[1].style.backgroundColor = ''
        buttonsTodo[1].style.color = 'blue'
        tabFait.forEach(element => {
            if (element.children[0].checked) {
                element.style.display = 'none'
            } else {
                element.style.display = 'flex'
            }
        })
    })
}


export {
    exo7
}