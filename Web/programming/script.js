// console.log("Hello, World!")

// const palavraNaoAltera = "Hello, World!";
// let palavraAltera = "Hello, World!";

// console.log(palavraAltera)
// palavraAltera = "mudou hahaha";
// console.log(palavraAltera)

let oi = "Hello, World!";
let number = 10;
let numer2 = 20;

console.log("todas as operacoes" ,number + numer2);
console.log("soma", number + numer2);
console.log("subtracao", number - numer2);
console.log("multiplicacao", number * numer2);
console.log("divisao", number / numer2);
console.log("resto da divisao", number % numer2);
console.log("incremento", ++number);
console.log("decremento", --number);
console.log("comparacao", number == numer2);
console.log("comparacao diferente", number != numer2);
console.log("comparacao maior que", number > numer2);
console.log("comparacao menor que", number < numer2);
console.log("comparacao maior ou igual", number >= numer2);
console.log("comparacao menor ou igual", number <= numer2);
console.log("comparacao estritamente igual", number === numer2);
console.log("comparacao estritamente diferente", number !== numer2);
console.log("concatenação", oi + " " + number);
console.log("concatenação com template string", `${oi} ${number}`);

let object = {
    nome: "Vanelli",
    idade: 30,
    cidade: "Dois Vizinhos",
    profissao: "Programador"
};

console.log("Objeto:", object);

let gta = {
    nome: "GTA V",
    ano: 2013,
    genero: "Ação/Aventura",
    plataforma: "PC, PS4, Xbox One"
};

function alertaGTA() {
    alert(`Jogo: ${gta.nome}\nAno: ${gta.ano}\nGênero: ${gta.genero}\nPlataforma: ${gta.plataforma}`);
}

function alerta() {
    alert("Olá, Mundo!");
}

function alertaMouse() {
    alert("Alerta Mouse!");
}

function alterar_texto() { 
    document.getElementById("text").innerHTML = "Texto alterado!"; 
}