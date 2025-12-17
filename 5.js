// Aula 6 - Loops

// FOR -- usado quando você sabe o número de repetições

for (let i = 0; i < 5; i++) {
    console.log(`Número ${i}`);
}

// WHILE -- usado quando você não sabe o número de repetições
// ele permanece em loop enquanto a condição for verdadeira

let contador = 0;
while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// DO WHILE -- executa o bloco de código pelo menos uma vez
// antes de verificar a condição

let numero = 5;
do {
    console.log(`Executando... `);
    numero--;
} while (numero > 5);

// BREAK -- interrompe o loop

for (let j = 0; j < 10; j++) {
    if (j === 5) break;
    console.log(j);
}

// CONTINUE -- pula para a próxima iteração do loop sem executar
// o restante do código na iteração atual

for (let k = 0; k < 5; k++) {
    if (k === 2) continue;
    console.log(k);
}

// -------------------------------------------------------------------------------
// EXEMPLOS PRÁTICOS
// Iterando Sobre um Array:

let frutas = ["Maçã", "Banana", "Laranja"];
for (let f = 0; f < frutas.length; f++) {
  console.log(frutas[f]);
}

// Somando Números de 1 a 10:

let soma = 0;
for (let s = 1; s <= 10; s++) {
  soma += s;
}
console.log(`Soma total: ${soma}`);

// Buscando um valor em uma lista:
let numeros = [3, 7, 1, 9, 4];
let busca = 9;
for (let n = 0; n < numeros.length; n++) {
  if (numeros[n] === busca) {
    console.log(`Número ${busca} encontrado na posição ${n}`);
    break;
  }
}

// Valdando dados com WHILE:
let senha = 5813;
let tentativa;
do {
  tentativa = prompt("Digite a senha:"); // Supondo que o prompt esteja disponível (só funciona em navegadores)
} while (tentativa !== senha);

console.log("Acesso liberado!");

// --------------------------------------------------------------------------------
// EXERCÍCIOS