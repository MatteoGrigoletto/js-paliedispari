`use strict`;

//richiedo parola all'utente con un alert

let word = prompt(`inserisci una parola`);

function palidrom(string){
    //uso il metodo split per creare un nuovo arraycon all'interno le lettere della parola
    let generateArray = string.split(``);
    //uso il metodo reverse per invertire l'ordine all'interno del mio array
    let arrayInverted = generateArray.reverse();
    //uso il metodo join per concatenare  il mio array in un unica parola senza spazzi
    let wordInverted = arrayInverted.join(``);
    if(wordInverted == string){
        console.log(`la parola e' palindroma`)
    }else{
        console.log(`la parola non e' palindroma`)
    }
    return wordInverted;
}
console.log(palidrom(`anna`))