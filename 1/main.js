'use strict';

// 1, 2, 3, lo hacemos otra vez


// Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.

// const ulElement = document.querySelector('.list');

// const numbers = [1, 2, 3];

// function createElements (){
//     let liContent;
// for(let i = 0; i < numbers.length; i++){
//     const liElement = document.createElement('li');
//     liContent = document.createTextNode(numbers[i]+ " ítem" );
//     liElement.appendChild(liContent);
//     ulElement.appendChild(liElement);
//     }
// }

// createElements();

//LOOP FOR OF AND ARROW FUNCTION------------------------------------------------------------------

const ulElement = document.querySelector('.list');

const numbers = [1, 2, 3];

const createElement = ()=>{
    let liElement;
    let liContent;
    for(const number of numbers){
        liElement = document.createElement('li');
        liContent = document.createTextNode(number);

        liElement.appendChild(liContent);
        ulElement.appendChild(liElement);

    }
}

createElement();