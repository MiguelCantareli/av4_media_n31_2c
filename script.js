function verificar(){
    var n1 = document.getElementById('nota1').value;
    var n2 = document.getElementById('nota2').value;
    var n3 = document.getElementById('nota3').value;
    var resultado = document.getElementById('resultado');
    var media = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;

    if (media >= 6){
        resultado.textContent = "Parabéns! Você foi aprovado por média " + media.toFixed(1) +".";
    } else {
        resultado.textContent = "Se liga! Você foi reprovado por média " + media.toFixed(1) + ".";
    }
}