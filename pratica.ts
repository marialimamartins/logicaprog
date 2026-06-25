//exemplo3 atividade prática em aula(typescript)

// let frase = "bem vindo  ao curso"
// function apresentar(texto:string):void{
//     console.log(texto);
// }
// apresentar(frase)


let data = new Date().toLocaleDateString('pt-Br')
function exibirData(data:string): void{
    console.log(data);
}
exibirData(data);

//pra rodar o programa em typescript tem que ser pelo terminal, e para rodar pelo terminal
// é preciso dar o comando npx tsx arquivo.ts
//onde "arquivo" seria o nome exato do arquivo que voce está usando, nesse caso aqui, pratica.ts


