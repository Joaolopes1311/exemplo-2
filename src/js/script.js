//DECLARAÇÕES E VARIÁVEIS
// var nome = "fiap";
// console.log(nome)

// let idade = 21
// console.log(idade)

// const sobrenome ="pedro"
// console.log (sobrenome)
//undefined
// let aula;
// console.log(aula)
//null
// let valor = null
// console.log(valor)

// let exemplo1={}

// let exemplo2=[]

// //TIPOS VARIAVEIS
// let exemplo3 = 10;
// console.log(typeof exemplo3)

// let exemplo4 = "Aula"
// console.log(typeof exemplo4)

// let exemplo5 = true;
// console.log(typeof exemplo5)

// let exemplo6 =["higuinho","zezinho", "luizinho"];
// console.log(typeof exemplo6)

//CONVERSÕES

//float => inteiro

// let numFloat =123.456;
// console.log(parseInt(numFloat));

// //string => float
// let numString ="547.987";
// console.log(parseFloat(numString))

//float => string

// let numFloat1 =554.665
// console.log(numFloat1.toString());

// let numInt=100;
// console.log(numInt.toString());

//METODOS - PARTE-1

//LENGHT - VERIFICA O TAMANHO DA STRING

// let frase = "o mundo da tecnologia"
// console.log(frase.length)

//indexOf - retorna um trecho de um texto

// let texto = "programação sustentavél"
// console.log(texto.indexOf("ão"))

//slice - retorna parte de um texto apontando o inicio e o final

// let info ="processamento de ponta"
// console.log(info.slice(0,13))

//OPERADORES ARITMÉTICOS

// const num1 = 10;
// const num2 = 20;

// console.log (num1 + num2)
// console.log(num1-num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

//OPERADORES LOGICOS

// const num3 =20;
// const num4 =30;

// console.log(num3 > num4)
// console.log(num3 < num4 && num4 < 50)
// console.log (num3 > num4 || num4 > num3)
// console.log (num4 === num3 || num4 <= num3)


//OPERADORES DE COMPARAÇÃO
// const num5 =25;
// const num6 =35;

// console.log(num5 == num6); //COMPARA
// console.log(num5 === num6) //COMPARA E VERIFICA O TIPO DA VARIAVEL
// console.log(num5 != num6) // DIFERENTE

//ESTRTURA CONDICIONAL

//IF

// let Valor =100;

// if(Valor==100){
// console.log("é verdadeiro")
// }

//if/else

// let valor1=100;

// if(valor1 ==100){
//     console.log("valor correto")
// }else{
//     console.log("valor errado")
// }

//if/else - encadeado ou aninhado

// let idade1 = 13;

 // if(idade1 < 14){
 // console.log("Não pode entrar na balada")
 // }
 // else if(idade1 >= 14 && idade1 < 18){
 // console.log("pode entrar e curtir")
 // }
// else if(idade1 > 50){
 // console.log("você nao tem idade para isso")
 // }
 // else{
//     console.log("fica em casa assistindo tv")
// }

//condiçao ternaria

// let valor2 =300;

// let resultado = valor2 == 300 ? "certo": "errado"
// console.log(resultado)

// SWITCH CASE


// let time = "cruzeiro";

// switch(time){
//     case "cruzeiro":
//     console.log("melhor time")
//     break;
//     case "atletico":
//     console.log("não é um time")
//     break;
//     case "america":
//     console.log("nao tem torcida")
//     break
//     default:
//         console.log("Nnhuma das opçoes")
// }


//ESTRUTURA DE LAÇO DE REPETIÇÃO

// for(let i=0;i<10;i++){
//     console.log("o valor de i é :", i)
// }


//WHILE

// let w=0

// while(w <= 10){
//     console.log("o valor de w é",w)
//     w++;

// }

//do while

// let z= 10;


// do{
//     console.log("do while é",z)
//     z++;
// }while(z <= 100)

    //funcões

    function saudacao (nome){
    //  console.log("seja bem vindo", nome)
    console.log (`seja bem vindo ${nome}`) //string literais
    }
saudacao("Fiap")

function semaforo (){
    let sinal = "amarelo";
    console.log(`o semaforo está ${sinal}`)
}
semaforo();








