// revisão

const nome = "Ricardo";
const anoAtual = 2025
const anoNascimento = 2000;
console.log('Olá, ' + nome);
console.log('Voce faz, ' + (anoAtual - anoNascimento) + ' anos em 2026');


let a = 10;
let b = 20; 

console.log( a + b)
console.log(a == b)
console.log(a>b)

let diadasemana = 3

switch (diadasemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;      
    case 3:
        console.log('Terça-feira');
        break;
    default:
        console.log('Dia inválido');
        break;
}

let idade = 17;

if (idade >= 18) {
    console.log('adulto');
    }
    else if (idade >= 12) {
        console.log('adolescente');
    }
    
    else if (idade >= 0) {
        console.log('criança');
    
    }
    else if (idade > 60) {
        console.log('velho');

}

let numero = 2;
let soma = 0;

while (numero <= 20) {
    if (numero % 2 === 0) {
        soma += numero;
    }
    numero++;
}

function saudar(nome, sobrenome) {
    return 'Olá, ' + nome + ' ' + sobrenome + '!';
}

console.log(saudar('Maria', 'Silva'));
console.log(saudar('João', 'Pereira'));
console.log(saudar('Ana', 'Costa'));

function aluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    const resultado = media >= 7 ? 'Aprovado' : media >= 5 ? 'Recuperação' : 'Reprovado';
    return resultado;
}

console.log(aluno(8, 6));
console.log(aluno(4, 5));
console.log(aluno(3, 2));

let frutas = ['maçã', 'banana', 'laranja', 'uva'];

// push - Adicionando elementos ao array
frutas.push('abacaxi');
// pop - Removendo o último elemento
frutas.pop();
// shift - Removendo o primeiro elemento
frutas.shift();
// unshift - Adicionando elemento no início
frutas.unshift('morango');
// splice - Removendo elementos em uma posição específica
frutas.splice(2, 1); // Removendo o elemento na posição 2

console.log(frutas);