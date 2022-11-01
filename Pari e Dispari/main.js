let numberPc= Math.floor(Math.random()*6);

const pariDispari = prompt("Sciegliere Pari o Dispari, sciegli 0 se vuuoi pari e 1 se vuoi dispari.");
if( pariDispari == 0){
    console.log("pari")
    const numberUser = prompt ("Sciegli un numero da 1 a 5")
    let risultato = (numberUser + numberPc) % 2;
    if(risultato === 0 ){
        console.log("hai vinto")
    }else{
        console.log("ha vinto il Pc")
    }
}else{
console.log("Dispari")
const numberUser = prompt ("Sciegli un numero da 1 a 5")
    let risultato = (numberUser + numberPc) % 2;
    if(risultato === 0 ){
        console.log("ha vinto il Pc")
    }else{
        console.log("hai vinto")
    }
}