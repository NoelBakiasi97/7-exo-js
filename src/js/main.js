import {exo1} from '../js/import/_exo1.js';
import {exo3} from '../js/import/_exo3.js';
import {exo4} from '../js/import/_exo4.js';
import {exo5} from '../js/import/_exo5.js';
import {exo6} from '../js/import/_exo6.js';
import {exo7} from '../js/import/_exo7.js';


let a = document.querySelectorAll('a');
let sections = document.getElementsByTagName('section');
let tab = []
for (let i=0; i < a.length; i++){
    tab.push({
        lien : a[i],
        exo: sections[i]
    });
    if (i!=6){
        sections[i].style.display = 'none'
    }
}


tab.forEach(e => {
    e.lien.addEventListener('click', () => {
        tab.forEach(x => {
            x.lien.classList.replace('text-white', 'text-primary');
            x.lien.classList.replace('bg-primary', 'bg-white');
            x.exo.style.display ='none';
        });
        e.lien.classList.replace('text-primary', 'text-white');
        e.lien.classList.replace('bg-white', 'bg-primary');
        e.exo.style.display ='block';
    });
});


//Exo1
exo1()

//Exo2
//OKay


//Exo3
exo3()

//Exo4
exo4()



//Exo5
exo5()



//Exo6
exo6()



//Exo7
exo7()






