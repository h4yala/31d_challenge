// ---------------------------------------------------------
// Declaração de Variáveis e Tipos de Dados
let nome = "Hayala"; //Valor pode ser alterado depois -- string -- entre aspas
const idade = 23; //Valor não pode ser alterado -- number
var estado = "Minas Gerais"; //Forma antiga de declarar variável, não é recomendada!

let estaLogado = false; //ou true -- boolean
let frutas = ["Maçã", "Banana", "Laranja"]; //Array -- entre colchetes
let pessoa = 
{ 
    nome: "Hayala", 
    idade: 23 
}; //Objeto -- entre chaves

// ---------------------------------------------------------

// Exercicio 1 - Nome e frase
console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos."); 
// console.log é usado para imprimir no terminal (é o printf do JavaScript)

//---------------------------------------------------------
// Exercicio 2 - Cálculo de Preço com Desconto
let preco = 49.99; 
let desconto = 0.2; //20% de desconto
let precoFinal = Number((preco - (preco * desconto)).toFixed(2)); // Arredonda para 2 casas decimais e converte para number
console.log("Preço final com desconto: R$ " + precoFinal);  

// ---------------------------------------------------------
// Exercicio 3 - Comida favorita
let comidaFavorita = ["Rocambole de carne", "Hambúrguer", "Strogonoff"];
console.log("Segundo item da lista de comidas favoritas: " + comidaFavorita[1]);

// ---------------------------------------------------------
// Exercicio 4 - Acesso a Propriedade de Objeto
let livro = {
    titulo: "Cem chances",
    autor: "Ruth Oliveira",
    ano: 2020
};
console.log("Titulo do livro: " + livro.titulo + "\nAutor do livro: " + livro.autor);

// ---------------------------------------------------------
// Exercicio 5 - Verificação de login
estaLogado = !estaLogado; //Inverte o valor booleano
console.log("Status de login: " + estaLogado);

// ---------------------------------------------------------
// Exercicio 6 - Constante
const PI = 3.14;
let areaCirculo = PI * (5 * 5); //Área do círculo com raio 5
console.log("Área do círculo com raio 5: " + areaCirculo); 

// ---------------------------------------------------------