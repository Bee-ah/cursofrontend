
function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// para o primeiro formulário(notas);

document.getElementById('formulario-01').addEventListener('submit', function( evento ){

    evento.preventDefault();//pra que serve isso
    evento.stopPropagation();//pra que serve


    let dados = new FormData(this);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        let numero=dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;//escrita em RegEx , a expressão encontra correspondencia com um numero[0-9]
      if(!isNaN(numero)){
        notas.push(numero);
      }

    }
    console.log(notas);

    console.log(objeto);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});

document.querySelector('input').addEventListener('focusout',function(event){
    event.preventDefault();//o que é isso
    if(this.value ==""){
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento"
        return false;
    }
});//o que é focusout
