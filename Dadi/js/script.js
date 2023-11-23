let diceBot = Math.floor(Math.random() * 6) + 1;
let diceUser = Math.floor(Math.random() * 6) + 1;

/* Visualizzazione del risultato */
console.log('Tu: '+ diceUser)
console.log('Computer: '+ diceBot)

/* Se il valore di diceBot è maggiore ha vinto il computer */
if(diceBot > diceUser){
    console.log('Ha vinto il computer')
/* Se i due valori sono uguali hanno pareggiato */
}else if(diceBot === diceUser){
    console.log('Avete pareggiato')
/* Se le 2 condizioni non sono vere ha vinto il giocatore */
}else{
    console.log('Hai vinto tu')
}