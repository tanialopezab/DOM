'use strict';

// Autocompletado
// Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
// Nombre
// Apellidos
// Teléfono
// Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente.




const newLabel = document.createElement('label');
const newLabelText = document.createTextNode(' Elige un nombre ');
newLabel.appendChild(newLabelText);
newLabel.setAttribute('for', 'selectAname');

document.body.appendChild(newLabel);


const newSelect = document.createElement('select');
newSelect.setAttribute('id', 'selectAData');
newSelect.classList.add('selectForm');

newLabel.appendChild(newSelect);


const optionAna = document.createElement('option');
const optionAnaText = document.createTextNode('Ana');
optionAna.appendChild(optionAnaText);
optionAna.setAttribute('value', 'Ana');

const optionMaria = document.createElement('option');
const optionMariaText = document.createTextNode('María');
optionMaria.appendChild(optionMariaText);

optionMaria.setAttribute('value', 'María');

const optionCarmen = document.createElement('option');
const optionCarmenText = document.createTextNode('Carmen');
optionCarmen.appendChild(optionCarmenText);
optionCarmen.setAttribute('value', 'Carmen');

newSelect.appendChild(optionAna);
newSelect.appendChild(optionMaria);
newSelect.appendChild(optionCarmen);


const arrData = [
    {
        name: 'Ana',
        surname: 'Perez',
        phone: 666666666,
    },

    {
        name: 'Maria',
        surname: 'Gonzalez',
        phone: 555555555,
    },

    {
        name: 'Carmen',
        surname: 'Martínez',
        phone: 444444444,
    }
]

//logica de formulario

//al hacer clic en el select recoge el valor
//recorre el array y compara;
//recorrre el arr de objetos



const selectELement = document.querySelector('.selectForm');
console.log(selectELement);
const inputNameElement = document.getElementById('name');
const inputSurnameElement = document.getElementById('surname');
const inputPhoneElement = document.getElementById('phoneNumber');


function getDecision() {
    let selectContent = selectELement.value;

    // if (selectContent === 'Ana') {
    //     inputNameElement.value = arrData[0].name;
    //     inputSurnameElement.value = arrData[0].surname;
    //     inputPhoneElement.value = arrData[0].phone;

    // } else if (selectContent === 'María') {
    //     inputNameElement.value = arrData[1].name;
    //     inputSurnameElement.value = arrData[1].surname;
    //     inputPhoneElement.value = arrData[1].phone;
    // } else {
    //     inputNameElement.value = arrData[2].name;
    //     inputSurnameElement.value = arrData[2].surname;
    //     inputPhoneElement.value = arrData[2].phone;
    // }

    for(let i = 0; i<arrData.length; i++){
        if(selectContent === arrData[i].name){
            inputNameElement.value = arrData[i].name;
            inputSurnameElement.value = arrData[i].surname;
            inputPhoneElement.value = arrData[i].phone;
        }
    }
}


selectELement.addEventListener('click', getDecision);