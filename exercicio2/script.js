// let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!")
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!")
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!")
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!")
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!")
// } else{
//     console.log("nacionalidade não encontrada")
// }

const nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()

switch(nacionalidade){
    case 'brasileira' :
    case 'brasileiro' :
        console.log(`brasileira`)
        break
    case 'argentina' :
    case 'argentino' :
        console.log(`Argentina`)
        break
    case `uruguaia`:
    case `uruguaio`:
        console.log(`Uruguaia`)   
        break      
    case `chilena`:
    case `chileno`:
        console.log(`Chilena`)
        break
    case `colombiana`:
    case `colombiano`:
        console.log(`Colombiana`)
        break
    default:
        console.log(`nacionalidade não encontrada !`)
}