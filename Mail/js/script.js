whiteList = ['piero@mail.com', 'giovanni@mail.com', 'luca@mail.com', 'riccardo@mail.com']
emailInput = prompt('Inserisci la tua email');
let notEqual = 0;
let i;

/* Ciclo ripetuto per ogni elemento nel vettore */
for(i = 0; i<whiteList.length;i++){
    /* Confronto tra l'email in input e la white list */
    if(emailInput === whiteList[i]){
        console.log('Sei ammesso');
        /* Quando l'utente è uguale esce dal ciclo */
        i = whiteList.length;
    } else{
        /* Se l'email è diversa viene aggiunto al not equal e ripetuto il controllo successivo */
        notEqual++
    }
}

 /* Se il numero di notEqual è uguale al numero di elemenenti array l'email non è presente nella white list */
if(notEqual == whiteList.length){
    console.log('Non sei ammesso');
}


