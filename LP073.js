// EXERCICIO 1

// function saudacao(){
//     console.log("estamos aprendendo funcões");
// }
// saudacao()


//EXERCICIO 2

// let numero = 10

// function triplo(num){
//     let resul = numero * 3
//     console.log(resul)
// }
// triplo(numero)

// EXERCICIO 3

// let idade = 14;

// function maioridade(num){
//     if(num>=18){
//         console.log("maior de idade")
//     }else{
//         console.log("menor idade")
//     }
// }
// maioridade(idade)

//exemplo com return

// function mensagem(){
//     return "nada"
// }
// console.log(mensagem())

// // mensagem()//não vai escrever nada por que não usamos console.log, só pedimos para retornar o valor


// //exemplo função dentro de função

// function somar (num1,num2){
//         resul = num1 + num2
//         return resul
// }

// function direcionador(){
//     console.log(`Se imponha`)
// }

// function tudo(){
//     console.log(`INICIO DA FUNÇÃO`)
//     direcionador();
//     let calc = somar(2,3)
//     console.log(`resultado da soma: ${calc}`)
//     let msg = mensagem()
//     direcionador()
//     console.log(`mensagem do dia: ${msg}`)
//     console.log(`FIM DA FUNÇÃO`)
// }
// tudo()

//EXERCICIO 4

// function multiplicar(a,b){
//     let resul = a * b
//     console.log(resul)
// }
// //caso fizessemos um console.log fora da função isso daria um erro, por erro de escopo, já que a variável resul não é global
// multiplicar(2,4)

//EXERCICIO 5

// function areatriangulo(base,altura){
//     resul = base * altura
//     console.log(resul)
// }
// let b = 8
// let a = 3
// areatriangulo(b,a)


//funções sem retorno são chamadas de void

//atividades práticas da aula

//exemplo1

// function apresentar(){
//     console.log(`bem vindo ao curso de javascript`)
// }
// apresentar()

//exemplo2

// function exibirData(){
//     console.log(new Date().toLocaleDateString('pt-Br'));
// }
// exibirData()
// exibirData()
// exibirData()

//saudação com nome testando escopos

// function saudacao(nome){ //nome é variavel local
//     return `Olá, ${nome}! Seja bem vindo(a).`
// }
// let nome = "Ana"//variavel global
// console.log(saudacao(nome))
// console.log(saudacao("Samuel"))







