//creo una funzione che mi generi i box a cui passerò
//il div dove metterli e il numero da scriverci dentro
function newBox(container, n){
    let box= document.createElement("div");
    box.className="box";
    box.innerHTML=n;
    container.append(box);
  }


//creo gli attributi per richiamare i 3 button del Dom
const buttonEasy=document.querySelector('.level-1')
const buttonMedium=document.querySelector('.level-2')
const buttonHard=document.querySelector('.level-3')

//richiamo la grid del Dom da riempire con i miei quadrati
const grid=document.querySelector('.grid');


//mi metto in ascolto del click per selezionare la difficoltà
buttonEasy.addEventListener("click", function(){
    //genero 49 box ad ogni click
})

buttonMedium.addEventListener("click", function(){
    //genero 81 box ad ogni click
})

buttonHard.addEventListener("click", function(){
    //genero 90 box ad ogni click
})