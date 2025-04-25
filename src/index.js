// Desafio 1
//Você foi chamado para ajudar a pintar uma parede em uma casa.
// A parede tem formato retangular, e você precisa saber quantos metros quadrados de tinta serão necessários para cobri-la. Para isso, você deve calcular a área da parede.
// A parede tem 4 metros de altura e 5 metros de largura.

//Para calcular a área de um retângulo, usamos a seguinte fórmula:
// area = largura * altura;

// Dimensões da parede (largura e altura em metros)
var largura = 5;
var altura = 4;


// Calculando a área da parede

// Exibindo o resultado no console


const comprimento = 5;
const diametro = 4;
const calculando = comprimento * diametro;
console.log(`A área da parede é : ${calculando} metros quadrados.`);
//-------------------------------------------------------------------------------------------------


// Desafio 2

// Imagine que você está desenvolvendo um sistema de cadastro para uma empresa.
// Quando um usuário se cadastra, ele insere seu nome e sobrenome em campos separados.
// Você precisa juntar essas duas informações para formar o nome completo do
// usuário e exibir uma mensagem de boas-vindas.

// Nome e sobrenome inseridos pelo usuário
var nome = "João";
var sobrenome = "Silva";


// Juntando os nomes com a mensagem de boas-vindas
   
       //seu código

// Exibindo a mensagem no console


const primeironome = "Carla";
const segundonome = "Monique";
const nomeComlpeto = primeironome + segundonome;
console.log(primeironome + segundonome)

//------------------------------------------------------------------------------------------------


//Desafio 

// Você está trabalhando no departamento de recursos humanos de uma empresa, e precisa
// calcular quantos dias um funcionário já viveu até agora, com base na idade informada.
// O funcionário informa sua idade em anos, e você deve converter esse valor para dias,
// considerando que todos os anos têm 365 dias.

// Idade do funcionário em anos

// Calculando anos em dias
  
      //seu código


// Exibindo o resultado no console

const idadeDeVida = 30;
const diasEmIdade = 365;
const calcular = idadeDeVida * diasEmIdade;
console.log(` O funcionário viveu aproximadamente ${calcular} dias`);

//-------------------------------------------------------------------------------------------------


// Desafio 4

// Você trabalha em uma empresa de eventos, e foi solicitado a calcular quanto tempo
// um evento durou. Você recebeu o total de minutos que o evento durou, mas precisa
// converter esse valor em horas e minutos para gerar um relatório. Por exemplo,
//  se o evento durou 135 minutos, você deve dizer que ele durou 2 horas e 15 minutos.

// Duração total do evento em minutos 135 minutos

// Calculando horas e minutos
  
      //seu código


// Exibindo o resultado no console
const duracaoEmMinutos = 135;
const Horas = Math.floor (duracaoEmMinutos / 60);
const Minutos = duracaoEmMinutos % 60;
console.log (`O evento durou ${Horas}horas e minutos ${Minutos}.`);

