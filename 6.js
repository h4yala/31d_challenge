// AULA 6 - ARRAYS
// o array sempre fica entre colchetes []

// manipulação de arrays

let numeros = [1, 2, 3, 4, 5]; // simples

let misto = [42, "Texto", true, { chave: "valor" }]; // diferentes tipos de dados

let vazio = []; // array vazio

let frutas = ["maçã", "banana", "laranja"];  

console.log(frutas);

frutas.push("uva"); // adiciona um elemento no final do array
frutas.push("melancia");
frutas.push("pêra");

console.log(frutas); 

frutas.pop(); // remove o último elemento do array

console.log(frutas);

frutas.shift(); // remove o primeiro elemento do array

console.log(frutas);

frutas.unshift("abacaxi"); // adiciona um elemento no início do array

console.log(frutas);

console.log(frutas.length); // tamanho do array

frutas.indexOf("banana"); // encontra o índice de um elemento
console.log(frutas.indexOf("banana"));

frutas.slice(1, 3); // cria um novo array a partir de uma parte do array original
let citricos = frutas.slice(1, 3);
console.log(citricos);

frutas.splice(2, 1); // remove elementos do array a partir de um índice
console.log(frutas);

frutas.splice(1, 1, "kiwi"); // adiciona elementos do array a partir de um índice
console.log(frutas);



//--------------------------------------------------------------------------------

// iterando sobre arrays com loops

for(let i = 0; i < frutas.length; i++) {
    let frutaDoLoop = frutas[i];
    console.log(`Minha fruta preferida é ${frutaDoLoop}`);
}

// --------------------------------------------------------------------------------

