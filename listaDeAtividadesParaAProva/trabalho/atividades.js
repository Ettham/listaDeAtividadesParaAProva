// 1) Variaveis e tipos de dados
let nome = "ettham";
let idade = 17;
let gostaDeProgramar = true;
let altura = 1.83;
let coresFavoritas = ["verde", "preto"];
let pessoa = { nome: "ettham", idade: 17 };

console.log(nome, idade, gostaDeProgramar, altura, coresFavoritas, pessoa);

// 2) Conversao de tipos
let numeroString = "42";
let numeroConvertido = Number(numeroString);
console.log(numeroConvertido + 10); // 52

// 3) Operadores aritmeticos
// Comentado para evitar prompt automatico ao rodar no Node
let num1 = Number(prompt("Digite o primeiro numero:"));
let num2 = Number(prompt("Digite o segundo numero:"));
console.log("Soma:", num1 + num2);
console.log("Subtracao:", num1 - num2);
console.log("Multiplicacao:", num1 * num2);
console.log("Divisao:", num1 / num2);

// 4) Condicional simples e ternario

let idadeUsuario = Number(prompt("Digite sua idade:"));
if (idadeUsuario >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
console.log(idadeUsuario >= 18 ? "Maior de idade" : "Menor de idade");


// 5) Switch - dia da semana

let dia = Number(prompt("Digite um numero de 1 a 7:"));
switch (dia) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda-feira"); break;
    case 3: console.log("Terca-feira"); break;
    case 4: console.log("Quarta-feira"); break;
    case 5: console.log("Quinta-feira"); break;
    case 6: console.log("Sexta-feira"); break;
    case 7: console.log("Sabado"); break;
    default: console.log("Numero invalido");
}


// 6) Operadores logicos
let numero = 14;
if (numero >= 10 && numero <= 20 && numero % 2 === 0) {
    console.log("Numero entre 10 e 20 e é par");
}

// 7) Metodos de string

let nomeDigitado = prompt("Digite seu nome:");
console.log(nomeDigitado.toUpperCase());
console.log(nomeDigitado.toLowerCase());
console.log(nomeDigitado.length);

// 8) Metodos de array
let frutas = ["banana", "laranja", "uva"];
frutas.push("manga");
frutas.shift();
console.log(frutas.includes("maca"));
console.log(frutas);

// 9) For 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10) forEach
let nomes = ["Victor", "Ana", "João"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));

// 11) map - numeros ao quadrado
let numeros = [1, 2, 3, 4];
let quadrados = numeros.map(n => n ** 2);
console.log(quadrados);

// 12) filter - idades >= 18
let idades = [15, 22, 30, 12];
let maiores = idades.filter(i => i >= 18);
console.log(maiores);

// 13) Funcao tradicional e arrow
function soma(a, b) {
    return a + b;
}
const somaArrow = (a, b) => a + b;
console.log(soma(5, 3), somaArrow(5, 3));

// 14) Funcao callback
function executaFuncao(callback) {
    callback("Victor");
}
executaFuncao(nome => console.log("Olá, " + nome));

// 15) Funcao anonima
let verificaParImpar = function(num) {
    return num % 2 === 0 ? "Par" : "Ímpar";
};
console.log(verificaParImpar(5));

// 16) Manipulacao de JSON
let obj = { nome: "Victor", idade: 17 };
let json = JSON.stringify(obj);
console.log(json);
let objConvertido = JSON.parse(json);
console.log(objConvertido);

// 17) Funcao assincrona
async function carregar() {
    await new Promise(res => setTimeout(res, 2000));
    console.log("Carregou!");
}
carregar();

// Parte teorica (18 a 25)
// 18) Back-end
console.log("\n18) Back-end e a parte do sistema que roda no servidor e gerencia dados e regras de negócio. Tecnologias: Node.js, PHP, Python.");

// 19) Diferenca server-side e client-side
console.log("\n19) Diferenca:\nServer-side: executa no servidor, ex: Node.js, PHP.\nClient-side: executa no navegador, ex: JS, HTML, CSS.");

// 20) Fluxo do back-end
console.log("\n20) Fluxo: Usuario -> Navegador -> Servidor -> Banco de dados -> Servidor -> Navegador -> Usuário.");

// 21) Primeiro script Node.js
console.log("\n21) Para rodar: node teste.js");

// 22) Verificar instalacao
console.log("\n22) Comandos: node -v e npm -v");

// 23) NPM
console.log("\n23) NPM e o gerenciador de pacotes do Node.js para instalar bibliotecas.");

// 24) Exemplos de funcionalidades do back-end
console.log("\n24) Login, pagamentos, armazenamento de dados.");

// 25) Metodos HTTP
console.log("\n25) GET (ler), POST (enviar), PUT (atualizar), DELETE (remover).");