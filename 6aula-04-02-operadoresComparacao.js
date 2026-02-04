/*
const idadeVinny = 35; 
const minhaIdade = 35; 
// console.log(idadeVinny == minhaIdade); 
// console.log(idadeVinny > minhaIdade); 
console.log(idadeVinny < minhaIdade); 
*/


/*
const idade = 18; 
if (idade >= 18) { 
console.log("Maior de idade"); 
} else { 
console.log("Menor de idade"); 
} 
*/

/*const idade1 = 36; 
const idade2 = "36"; 
console.log(idade1 === idade2); // false*/
/*
const nota = 6
if(nota >=0){
    console.log("ruim")
}
if(nota>=4){
    console.log("mediano")
    if(nota>=6){
        console.log("bom")
    }
}
if(nota>=7){console.log("excelente")}
if(nota>10){console.log("insira uma nota válida")} 
*/

/*
const nota = 8; 
if(nota >= 7 && nota <= 9) {
    console.log("Bom")
} else console.log("Ruim")
// switch (nota) { 
// case 10: 
// case 9: 
// console.log("Excelente"); 
// break; 
// case 8: 
// case 7: 
// console.log("Boa"); 
// break; 
// case 6: 
// case 5: 
// case 4: 
// console.log("Mediana"); 
// break; 
// case 3: 
// case 2: 
// case 1: 
// case 0: 
// console.log("Ruim"); 
// break; 
// default: 
// console.log("Valor inválido"); 
// } 
*/
/*
// Verifique se uma pessoa pode votar (idade ≥ 16).
const idade = 16;
const podeVotar = idade >= 16;

if(podeVotar)
    console.log('Pode votar')
else
    console.log('Não pode votar')

*/

// const idade = 18;
// const maiorDeIdade = idade >= 18;
// const possuiCNH = false;

// const podeDirigir = maiorDeIdade && possuiCNH; // AND

// console.log('Pode dirigir?', podeDirigir);



// //Explorando diferentes cenários de idade e CNH
const idade = 10;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;
const podeViajarSozinha = maiorDeIdade || possuiCNH; // OR

console.log('Pode viajar sozinha?', podeViajarSozinha);

const precisaDeAcompanhante = !maiorDeIdade;
console.log('Precisa de acompanhante?', precisaDeAcompanhante);
