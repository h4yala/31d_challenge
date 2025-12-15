// BOOLEANOS NO JAVASCRIPT

let verdadeiro = true;
let falso = false;

console.log(5 > 6); // false
console.log(6 > 5); // true
console.log(5 == 6); // false
console.log(5 != 6); // true
console.log(5 <= 6); // true
console.log(6 >= 6); // true

let idade = 20;
let temCarteira = false;

if(temCarteira && idade >= 18) { // operador lógico E (&&) necessita que ambas as condições sejam verdadeiras
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

if(temCarteira || idade >= 18) { // operador lógico OU (||) necessita que apenas uma das condições seja verdadeira
    console.log("Pode beber");
} else {
    console.log("Não pode beber");
}

let temAcompanhante = true;

if ((idade >= 18 && temCarteira) || temAcompanhante) {
  console.log("Pode entrar!");
}

// Negação lógica (!) inverte o valor booleano
let luzAcesa = false;

if (!luzAcesa) {
  console.log("A luz está apagada. 💡");
}

// ----------------------------------------------------
// Exercício 1 - Verificação de valor

let num = 15;

if (num > 10 && num < 20) {
    console.log("O número está entre 10 e 20");
} else {
    console.log("O número não está entre 10 e 20");
}

// ----------------------------------------------------
// Exercício 2 - Verificação de idade para voto

let idadeVoto = 17;
let temTitulo = true;

if (idadeVoto >= 16 && temTitulo) {
    console.log("Pode votar");
} else {
    console.log("Não pode votar");
}

// ----------------------------------------------------
// Exercício 3 - Verificação de notas

let nota = 91;

if (nota >= 90) {
    console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado com B");
} else if (nota < 70) {
    console.log("Reprovado");
}

// ----------------------------------------------------
// Exercício 4 - Verificação de saldo

let saldo = 150;

if (saldo > 0) {
    console.log("Saldo positivo");
} else if (saldo === 0) {
    console.log("Saldo zerado");
} else {
    console.log("Saldo negativo");
}

// ----------------------------------------------------
// Exercício 5 - Verificação de lampada

let luzDesligada = false;

if (!luzDesligada) {
    console.log("A luz está acesa");
}
