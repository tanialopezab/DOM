'use strict'

///CREACIÓN DE LA PÁGINA CON DOM AVANZADO

const body = document.querySelector('body');
const imageDefault = 'https://via.placeholder.com/299/5CB6E9/FFFFFF?Text=PHOTO+PREVIEW';

// https://via.placeholder.com/299/5CB6E9/FFFFFF?Text=PHOTO+PREVIEW
// //OBJETS --- IMAGES NAMES

const madrid = {
    name: "Madrid",
    image1: 'https://www.rafaelhoteles.com/blog/wp-content/uploads/2018/05/Calle-de-Alcal%C3%A1-Madrid-770x515.jpg',
    image2: 'https://vramon1958.files.wordpress.com/2014/11/10819870_10205287445096417_584874184_o.jpg',
    image3: 'https://miviaje.com/wp-content/uploads/2018/03/fuente-cibeles-madrid.jpg',
}

const newYork = {
    name: "New York",
    image1: 'https://q-ak.bstatic.com/images/hotel/max1024x768/174/174729191.jpg',
    image2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHysXrA_IS0b7jloQJ_YYLuT5t8MVRe-WU79n4b7NlNbuUCOpn',
    image3: 'https://previews.123rf.com/images/deberarr/deberarr1501/deberarr150100001/35866491-ciudad-de-nueva-york-central-park-en-oto%C3%B1o.jpg',
}

const paris = {
    name: "Paris",
    image1: 'https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022_960_720.jpg',
    image2: 'https://blog.fotolia.com/es/files/2015/02/ImagesInWordPress-P6-01-Fotolia_44313077_S_copyright.jpg',
    image3: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Avenue_des_Champs-%C3%89lys%C3%A9es%2C_Paris_3_October_2010.jpg',
}

//ARRAY WITH OBJECTS

const arrData = [madrid, newYork, paris];

//CREATE WEB PAGE STRUCTURE 


//CREATE SINGLE LABEL. TEXT CONTENT 'Elige una ciudad'. SET ATTRIBUTE FOR. BODY IS PARENT ELEMENT

const newLabel = document.createElement('label');
const newLabelText = document.createTextNode(' Elige una ciudad: ');
newLabel.appendChild(newLabelText);
newLabel.setAttribute('for', 'chooseCity');
newLabel.classList.add('instructions__text');

body.appendChild(newLabel);

//CREA UN INPUT TIPO SELECT con un id = chooseCitY;Será hijo de label

const newSelect = document.createElement('select');
newSelect.setAttribute('id', 'chooseCity');
newSelect.classList.add('selectForm');

newLabel.appendChild(newSelect);

// CREA TRES OPCIONES CADA OPCION CON UN CONTENIDO Y CON UN VALUE
const optionMadrid = document.createElement('option');
const optionMadridText = document.createTextNode('Madrid');
optionMadrid.appendChild(optionMadridText);
optionMadrid.setAttribute('value', 'Madrid');


const optionNewYork = document.createElement('option');
const optionNewYorkText = document.createTextNode('New York');
optionNewYork.appendChild(optionNewYorkText);

optionNewYork.setAttribute('value', 'New York');


const optionParis = document.createElement('option');
const optionParisText = document.createTextNode('Paris');
optionParis.appendChild(optionParisText);
optionParis.setAttribute('value', 'Paris');

newSelect.appendChild(optionMadrid);
newSelect.appendChild(optionNewYork);
newSelect.appendChild(optionParis);

//CREA TRES IMAGENES

const firstImage = document.createElement('img');
const secondImage = document.createElement('img');
const thirdImage = document.createElement('img');

firstImage.setAttribute('class', 'imageBasics');
secondImage.setAttribute('class', 'imageBasics');
thirdImage.setAttribute('class', 'imageBasics');

firstImage.setAttribute('src', imageDefault);
secondImage.setAttribute('src', imageDefault);
thirdImage.setAttribute('src', imageDefault);

body.appendChild(firstImage);
body.appendChild(secondImage);
body.appendChild(thirdImage);


//LOGIC

const selectElement = document.getElementById('chooseCity');


function chooseCitY(event) {

    let selectOptionChose = event.currentTarget;

   

    // if (selectOptionChose.value === 'Madrid') {
       
    //     firstImage.src = arrData[0].madrid1;
    //     secondImage.src = arrData[0].madrid2;
    //     thirdImage.src = arrData[0].madrid3;

    // } else if (selectOptionChose.value === 'New York') {

    //     firstImage.src = arrData[1].newYork1;
    //     secondImage.src = arrData[1].newYork2;
    //     thirdImage.src = arrData[1].newYork3;

    // } else if (selectOptionChose.value === 'Paris') {
    
    //     firstImage.src = arrData[2].paris1;
    //     secondImage.src = arrData[2].paris2;
    //     thirdImage.src = arrData[2].paris3;
    // } else {

    // }

 for(let j = 0; j< arrData.length; j++){

       if(selectOptionChose.value === arrData[j].name){
        firstImage.src = arrData[j].image1;
        secondImage.src = arrData[j].image2;
        thirdImage.src = arrData[j].image3;

        const pNameCity = document.createElement('p');
        const nameCityContent = document.createTextNode(arrData[j].name)
        pNameCity.appendChild(nameCityContent);
        document.body.appendChild(pNameCity);
       }
   
 }
  
}

selectElement.addEventListener('click', chooseCitY);


