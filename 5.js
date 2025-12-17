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
//let senha = 5813;
//let tentativa;
//do {
 // tentativa = prompt("Digite a senha:"); // Supondo que o prompt esteja disponível (só funciona em navegadores)
//} while (tentativa !== senha);

//console.log("Acesso liberado!");

// --------------------------------------------------------------------------------
// EXERCÍCIOS 
// QUESTÃO 1 - Use um loop for para imprimir os números de 1 a 10 no console.

for (let num= 1; num <= 10 ; num++) {
  console.log(num);
}

// QUESTÃO 2 - Crie uma lista de nomes e use um for para exibir cada nome.

let nomes = ["Jennie", "Jimin", "Carlos Birinto", "Carina Leone"];

for (let x = 0; x < nomes.length; x++) {
  console.log(nomes[x]);
}

// QUESTÃO 3 - Escreva um código que verifica se um número em um array é maior que 10. 
// Pare de verificar assim que encontrar o primeiro.

let lista = [5, 3, 8, 22, 7, 14];
for (let y = 0; y < lista.length; y++) {
  if (lista[y] > 10) {
    console.log(`Número maior que 10 encontrado: ${lista[y]}`);
    break;
  }
}

// QUESTÃO 4 - Use um while para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.

let z = 10;

while (z <= 10 && z !== 0) {
  console.log(z);
  z--;
  if (z === 0) {
    console.log("Lançamento!");
  }
}

// QUESTÃO 5 - Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1)

let fatorial = 5;
let resultado = 1;

for (let a = fatorial; a > 0; a--) {
  resultado *= a;
}
console.log(`Fatorial de ${fatorial} é ${resultado}`);

