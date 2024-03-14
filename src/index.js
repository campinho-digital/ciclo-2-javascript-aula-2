// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
//console.log(idade); 





////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
   // console.log(x); 
}
// console.log(x);



///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

// console.log(x);
// console.log(y);

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
var a = 5;
console.log(b);
//let b = 10;


/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

var x = 5;
var x = 10;
// console.log(x); 

let y = 15;
let y = 20; 
// console.log(y); 


//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo'

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)







