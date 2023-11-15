//Descobrir Numero Secreto com maximo de tentativas

var numeroSecreto = parseInt(Math.random() * 1001)
var numeroDeChutes = 10

while (numeroDeChutes > 0){
    var chute = prompt('Digite um numero entre 1 e 1000')
    chute = parseInt(chute);

while (chute !== numeroSecreto) {
    alert("Chute incorreto. Tente novamente.")
    numeroDeChutes--;

    if (numeroDeChutes === 0) {
        alert("Suas tentativas acabaram. O número seceto era " + numeroSecreto + ".")
        break;
    }
    alert("Você tem " + numeroDeChutes + " chutes restantes. ")

    chute = prompt ("Digite seu chute:")
    chute = parseInt(chute);
}
if (chute === numeroSecreto) {
    alert("Parabéns! Você acertou!")
    break
}
}
