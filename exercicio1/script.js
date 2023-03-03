
const recebeNum = Number(prompt(`Digite o número !`))


 if (recebeNum % 2 === 0){
    if (recebeNum % 3 === 0){
        console.log(`O ${recebeNum} é divisível por 2 e 3 !`);
    } 
 }


 if(recebeNum % 2 === 0 && recebeNum % 3 === 0) {
    console.log(`O numero é divisivel por 2 e 3.`)
 }

 if(recebeNum % 2 === 0 || recebeNum % 3 === 0) {
    console.log(`O numero é divisivel por 2 e 3.`)
 }
