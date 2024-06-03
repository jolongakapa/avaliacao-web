function dividirNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultadoDividir = numero1 / numero2
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultadoDividir
    if((numero2==0)){
        alert("seu numero n pode ser 0, digite outro")
    }
}

function notaNumeros(){
    var nota1 = document.getElementById("nota1").value
    var nota1Alterado = parseInt(nota1)
    var nota2 = document.getElementById("nota2").value
    var nota2Alterado = parseInt(nota2)
    var nota3 = document.getElementById("nota3").value
    var nota3Alterado = parseInt(nota3)
    var nota4 = document.getElementById("nota4").value
    var nota4Alterado = parseInt(nota4)

    var resultado = (nota1Alterado+nota2Alterado+nota3Alterado+nota4Alterado)/4

    if(resultado>5){
        alert("o aluno foi aprovado com: "+resultado)
    }

    else{
        alert("O aluno foi reprovado com: "+resultado)
    }

}

function somarNumeros(){
    var numero1 = document.getElementById("num10").value
    var numero1Alterado = parseInt(numero1)
    var numero2 = document.getElementById("num11").value
    var numero2Alterado = parseInt(numero2)
    var numero3 = document.getElementById("num12").value
    var numero3Alterado = parseInt(numero3)
    var resultado = numero1Alterado+numero2Alterado
    if(numero3Alterado<resultado){
        alert(resultado+ " é maior que " +numero3Alterado)
    }
    else{
        alert(resultado+ " é menor que " +numero3Alterado)
    }

}

function retangulo(){
    
    var numero13 = parseInt(document.getElementById("num13").value);
    var numero14 = parseInt(document.getElementById("num14").value);
    var resultado = numero13 * numero14
    var teste = document.getElementById("resultadoretangulo")
    teste.innerHTML=resultado
}

function reajuste(){
    var numero15 = parseInt(document.getElementById("num15").value);
    var numero16 = parseInt(document.getElementById("porc").value);
    var resultado = numero15*(numero16/100)+numero15
    var teste = document.getElementById("salarioAtual")
    teste.innerHTML=resultado
    
}

function pinto(){
    var numero17 = parseInt(document.getElementById("num17").value);
    if(numero17<10){
        alert("o numero digitado é menor que 10")
    }
    else{
        alert("o numero digitado é maior que 10")
    }
    
}