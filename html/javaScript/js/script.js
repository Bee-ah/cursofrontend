//exercicio-tarefa da ebac a partir da linha 62
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

// para o exercício de notas
const formulario1 = document.getElementById('formulario-01');
if(formulario1){
formulario1.addEventListener('submit', function( evento ){

    evento.preventDefault();//pra que serve isso
    evento.stopPropagation();//pra que serve
    
    if(this.getAttribute('class').match(/erro/)){
        return false;
    }

    let dados = new FormData(this);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        let numero=dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;//escrita em RegEx , a expressão encontra correspondencia com um numero[0-9]
      if(!isNaN(numero)){
        notas.push(numero);
      }

    }
    console.log(notas);

    console.log(objeto);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto;

});

}



//tarefa do módulo:

function validaCampo(elemento){
    elemento.addEventListener('focusout',function(event){
        event.preventDefault();
        if(this.value ==""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else{
            document.querySelector('.mensagem').innerHTML ='';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

/*pra ver que o campo é um numero e cep*/
function validaCampoNumerico(elemento){
    elemento.addEventListener('focusout',function(event){//focusout é acionado assim que o elemento perde o foco
        event.preventDefault();
        const cep = /^[0-9]{5}-*[0-9]{3}$/; 
        let numero=this.value;
        if(numero!="" && numero.match(cep)){
            document.querySelector('.mensagem').innerHTML ='';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else{document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numerico');
for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
}


//validação de email
function validaEmail(elemento){
    elemento.addEventListener('focusout',function(event){//é uma função anônima
        event.preventDefault();
        //critério de email válido recomendado 
        const emailValido=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML="";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else{
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}
//fazendo a chamada do email:
let camposEmail = document.querySelectorAll('input.email');
for(let emFoco of camposEmail){
    validaEmail(emFoco);
}

//verificador de uf
function validaUf(elemento){
    elemento.addEventListener('focusout',function(event){
        event.preventDefault();
        const ufValido =/^A[CLPM]|BA|CE|DF|ES|GO|M[ATSG]|P[ABREI]|R[JNRSO]|S[CEP]|TO/i;
        if(this.value.match(ufValido)){
            document.querySelector('.mensagem').innerHTML="";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        else{
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}
//fazendo a chamada de uf
let campoUf=document.querySelectorAll('input.uf');
for(let emFoco of campoUf){
    validaUf(emFoco);
}

