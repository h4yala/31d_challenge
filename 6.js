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

frutas.slice(0, 3); // cria um novo array a partir de uma parte do array original
let citricos = frutas.slice(1, 3);
console.log(citricos);

frutas.splice(2, 1); // remove elementos do array a partir de um índice
console.log(frutas);

let lista = ["A", "B", "C"];
lista.splice(1, 1, "X", "Y");
console.log(lista);  // Saída: ["A", "X", "Y", "C"]

frutas.reverse(); // inverte a ordem dos elementos do array
console.log(frutas);

frutas.sort(); // ordena os elementos do array em ordem alfabética
console.log(frutas);

frutas.join(", "); // junta os elementos do array em uma string
let frutasString = frutas.join(", ");
console.log(frutasString);


//--------------------------------------------------------------------------------

// iterando sobre arrays com loops

for(let i = 0; i < frutas.length; i++) {
    let frutaDoLoop = frutas[i];
    console.log(`Minha fruta preferida é ${frutaDoLoop}`);
}

// --------------------------------------------------------------------------------
// EXERCICIOS

// 1 - Crie um array com suas três cores favoritas e adicione uma nova cor no final.

let favoritas = ["preto", "rosa", "bordô"];
favoritas.push("branco");
console.log(favoritas);

// 2 - Use um loop para exibir todos os itens de um array de compras.

let compras = ["arroz", "feijão", "leite", "ovos", "chocolate"];

console.log("Lista de compras: ");
for (let a = 0; a < compras.length; a++) {
    let item = compras[a];
    console.log(item);
}

// 3 - Dado um array de números [10, 20, 30, 40, 50],
//  use o método slice para extrair os dois últimos números.

let num = [10, 20, 30, 40, 50];
let ultimos = num.slice(3, 5);
console.log(ultimos); // [40, 50]

// 4 - Crie um array de tarefas e remova a primeira tarefa usando shift.

let tarefas = ["estudar", "limpar a casa", "fazer compras"];
tarefas.shift();
console.log(tarefas);

// 5 - Use splice para substituir o terceiro item de um array por "Substituído".

let teste = ["um", "dois", "três", "quatro"];
teste.splice(2, 1, "substituido");
console.log(teste); 

// 6 - Transforme um array de palavras em uma frase completa usando join.

let palavras = ["o", "sol", "pediu a", "lua", "em casamento"];
let frase = palavras.join(" ");
console.log(frase);
