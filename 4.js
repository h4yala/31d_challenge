// STRINGS NO JAVASCRIPT

let nome = "Hayala";
let sobrenome = 'Hora';

let saudacao = `Olá, ${nome} ${sobrenome}! Bem-vinda ao JavaScript.`; // template string - conseguimos concatenar variáveis no texto
console.log(saudacao);

let saudacao2 = "Olá, " + nome + "!";
console.log(saudacao2);

let palavra = 'Programação';
console.log(palavra[1]); // Acessando o segundo caractere da string (índice começa em 0)
console.log(palavra.length); // Tamanho da string

let frase = "Eu amo programar!";
let recorte = frase.slice(7, 16); // Extrai a palavra "programar"
console.log(recorte);

let fraseMaiuscula = frase.toUpperCase(); // Converte para maiúsculas
console.log(fraseMaiuscula);

let fraseMinuscula = frase.toLowerCase(); // Converte para minúsculas
console.log(fraseMinuscula);

