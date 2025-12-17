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

// -------------------------------------------------------------------------------------
// Metodos uteis de string
let exemplo = "  Espaços em branco  ";
console.log(exemplo.trim()); // Remove espaços em branco do início e do fim
console.log(exemplo.includes("em")); // Verifica se a string contém "em"
console.log(exemplo.replace("branco", "vazios")); // Substitui "branco" por "vazios"
console.log(exemplo.slice(0,4)); // Extrai os primeiros 4 caracteres
console.log(exemplo.indexOf("em")); // Retorna o índice da primeira ocorrência de "em"
console.log(exemplo.split(" ")); // Divide a string em um array usando espaço como separador
console.log(exemplo.startsWith("  Espaços")); // Verifica se a string começa com "  Espaços"
console.log(exemplo.endsWith("branco  ")); // Verifica se a string termina com "branco  "
// -------------------------------------------------------------------------------------
// Exemplos práticos

let name = "   ana silva   ";
console.log(nome.trim().toUpperCase());  // Saída: ANA SILVA

// validando email
let email = "usuario@gmail.com";
if (email.includes("@")) {
  console.log("Email válido!");
} else {
  console.log("Email inválido!");
}

// -------------------------------------------------------------------------------------
// Exercícios

// 1 - Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let fullname = "   Carlos Eduardo da Silva   ";
console.log(fullname.trim().slice(0,6)); // Saída: carlos

// 2 - Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let fraseExercicio = "JavaScript é uma linguagem de programação incrível!";
console.log(fraseExercicio.includes("Java")); // Saída: true
console.log(`Olá, seja bem vinda a quarta aula de ${fraseExercicio.slice(0,10)}`); // mensagem personalizada com métodos dentro do console.log

// 3 - Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let maiuscula = "  esta frase é naturalmente escrita em minúscula.  ";
console.log(maiuscula.trim().toUpperCase()); // Saída: ESTA FRASE É NATURALMENTE ESCRITA EM MINÚSCULA.

// 4 - Substitua a palavra "erro" por "correção" na string "Houve um erro no sistema.".

let erro = "Houve um erro no sistema.";
console.log(erro.replace("um erro", "uma correção")); // Saída: Houve uma correção no sistema.

// 5 - Divida a frase "Eu amo JavaScript" em palavras separadas e exiba cada uma.

let dividir = "Eu amo Javascript";
console.log(dividir.split(" ")); // Saída: [ 'Eu', 'amo', 'Javascript' ]

// 6 - Valide se um URL começa com "https://" e termina com ".com".

let url = "https://www.exemplo.com";
console.log(url.startsWith("https://")); // Saída: true
console.log(url.endsWith(".com")); // Saída: true

