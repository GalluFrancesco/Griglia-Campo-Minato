//creo una funzione che mi generi i box a cui passerò
//il div dove metterli e il numero da scriverci dentro
function newBox(container, n){
    let box= document.createElement("div");
    box.className="box";
    box.innerHTML=n;
    container.append(box);
    addEvent(box);
}
//creo funzione per cambiare il colore del bg al click
function addEvent(element){
    element.addEventListener("click", function(){
    this.classList.toggle("lightblue");
    })
}

//creo gli attributi per richiamare i 3 button del Dom
const buttonEasy=document.querySelector('.level-1')
const buttonMedium=document.querySelector('.level-2')
const buttonHard=document.querySelector('.level-3')

//richiamo la grid del Dom da riempire con i miei quadrati
const grid=document.querySelector('.grid');

//richiamo :root dal css per settare la viariabile
const root= document.querySelector(':root');

//mi metto in ascolto del click per selezionare la difficoltà
buttonEasy.addEventListener("click", function(){
    //pulisco il contenuto del grid ad ogni click
    grid.innerHTML="";

    //setto quanti box voglio per riga e per colonna
    //7 per difficoltà facile
    root.style.setProperty('--n', '7')

    //genero 49 box ad ogni click
    for(let i=1; i<=49; i++){
        newBox(grid, i);
    }
})

buttonMedium.addEventListener("click", function(){
    //pulisco il contenuto del grid ad ogni click
    grid.innerHTML="";

    //setto quanti box voglio per riga e per colonna
    //9 per difficoltà facile
    root.style.setProperty('--n', '9')

    //genero 81 box ad ogni click
    for(let i=1; i<=81; i++){
        newBox(grid, i);
    }
})

buttonHard.addEventListener("click", function(){
    //pulisco il contenuto del grid ad ogni click
    grid.innerHTML="";

    //setto quanti box voglio per riga e per colonna
    //10 per difficoltà facile
    root.style.setProperty('--n', '10')

    //genero 90 box ad ogni click
    for(let i=1; i<=100; i++){
        newBox(grid, i);
    }
})