// CONDICIONAIS NO JAVASCRIPT
// SE (if) - SENÃO SE (else if) - SENÃO (else)

let hora = 14

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Switch case: comparação de valor exata, semelhante a vários if elses

let diaDasemana = 2

switch (diaDasemana) {
    case 1:
        console.log("Domingo"); 
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break
    default:
        console.log("Dia inválido");
}

// Operador Ternário: condição simplificada

let idade = 20;
let podeBeber = (idade >= 18) ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

// Verificação de Par ou Ímpar

let numero = 7;
if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}
// `${numero}` é template string: permite inserir variáveis dentro do texto 


// ---------------------------------------------------------
// Exercício 1 - Meses do ano

let mes = 9;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
}

// ---------------------------------------------------------
// Exercício 2 - Verificação de idade para dirigir

let age = 17;

if (age >= 18) {
    console.log("Pode dirigir!")

} else {
    console.log("Não pode dirigir!")
}

// ---------------------------------------------------------
// Exercício 3 - Verificação de saldo

let saldo = 150.00;

let verificar = (saldo > 0) ? "Saldo positivo" : "Saldo negativo";
console.log(verificar);

// ---------------------------------------------------------
// Exercício 4 - Verificação de número positivo, negativo ou zero

let num = -5;

if (num > 0) {
    console.log("Número positivo");
} else if (num < 0) {
    console.log("Número negativo");
} else {
    console.log("Número é zero");
}

// ---------------------------------------------------------
// Exercício 5 - caixa eletronico simplificado

let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Saque selecionado");
        break;
    case 2:
        console.log("Depósito selecionado");
        break;
    case 3:
        console.log("Consulta de saldo selecionada");
        break;
    default:
        console.log("Opção inválida");
}

