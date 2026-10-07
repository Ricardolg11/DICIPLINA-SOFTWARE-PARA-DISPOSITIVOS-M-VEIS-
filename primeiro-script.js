// revisão - provaw

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
// forEach - Iterando sobre os elementos do array frata + posicao
frutas.forEach(function(fruta, posicao) {   
    console.log('Fruta: ' + fruta + ', Posição: ' + posicao);
}); 


let = numeros = [1, 2, 3, 4, 5];
// map - Criando um novo array com o quadrado dos números
let quadrado = numeros.map(function(numero) {
    return numero * numero;
});
console.log(quadrado);
// filter - Filtrando apenas os números pares
let numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numerosPares);
// reduce - Calculando a soma de todos os números
let somaTotal = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);  
console.log(somaTotal);

// Exercício 1: Crie um array de objetos representando produtos, cada produto deve ter um nome e um preço. Em seguida, utilize o método filter para criar um novo array contendo apenas os produtos com preço maior que 50. Por fim, utilize o método reduce para calcular a soma dos preços desses produtos filtrados.
let produtos = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 49.99 },
    { nome: 'Tênis', preco: 89.99 },
    { nome: 'Jaqueta', preco: 99.99}
];

let total = produtos
    .filter(function(produto) {
    return produto.preco > 50;})
    .reduce(function(acumulador, produto) {
    return acumulador + produto.preco;
}, 0);
console.log('Total: ' + total);

// Exercício 1: Crie uma função que receba um array de números e retorne a soma de todos os números pares.
let listnumerointeiro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listnumeropar = listnumerointeiro.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(listnumeropar);


let listaalunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Ana', nota: 8 }
];

// Exercício 2: Crie um array de objetos representando alunos, cada aluno deve ter um nome e uma nota. Em seguida, utilize o método filter para criar um novo array contendo apenas os alunos com nota maior ou igual a 7. Por fim, utilize o método reduce para calcular a média das notas desses alunos filtrados.
let notasaltas = listaalunos.filter(function(aluno) {
    return aluno.nota >= 7;
}).map(function(aluno) {
    return aluno.nome;
});

let medianotas = notasaltas.reduce(function(acumulador, aluno) {
    return acumulador + aluno.nota;
}, 0) / notasaltas.length;

console.log('Alunos com nota maior ou igual a 7: ' + notasaltas.join(', '));
console.log('Média das notas dos alunos com nota maior ou igual a 7: ' + medianotas);

let funcionarios = [
    { nome: 'Carlos', salario: 3000 },
    { nome: 'Fernanda', salario: 4500 },
    { nome: 'Marcos', salario: 2500 },
    { nome: 'Patrícia', salario: 5000 }
];

// Exercício 3: Crie um array de objetos representando funcionários, cada funcionário deve ter um nome e um salário. Em seguida, utilize o método reduce para encontrar o funcionário com o maior salário.
let funcinariocommaiorsalario = funcionarios.reduce(function(funcionarioMaior, funcionarioAtual) {
    return funcionarioAtual.salario > funcionarioMaior.salario ? funcionarioAtual : funcionarioMaior;
}, funcionarios[0]);

console.log('Funcionário com maior salário: ' + funcinariocommaiorsalario.nome + ', Salário: ' + funcinariocommaiorsalario.salario);


let produtos2 = [
    { nome: 'Camiseta', preco: 29.99, quantidade: 10 },
    { nome: 'Calça', preco: 49.99, quantidade: 5 },
    { nome: 'Tênis', preco: 89.99, quantidade: 3 },
    { nome: 'Jaqueta', preco: 99.99, quantidade: 2 }
];

// Exercício 4: Crie um array de objetos representando produtos, cada produto deve ter um nome e um preço. Em seguida, utilize o método reduce para calcular o valor total dos produtos.
let valortotal = produtos2.reduce(function(acumulador, produto) {
    return acumulador + produto.preco;
}, 0);
console.log('Valor total dos produtos: ' + valortotal);

// Exercício 5: Crie um array de objetos representando produtos, cada produto deve ter um nome, preço e quantidade em estoque. Em seguida, utilize o método reduce para calcular o valor total do estoque (preço * quantidade).
let valorestoque = produtos2.reduce((acumulador, produto) => acumulador + (produto.preco * produto.quantidade), 0);

console.log('Valor total do estoque: ' + valorestoque);