const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*100+1)
}
console.log('Numero secreto: ', numeroSecreto)