let listaDeNumerosSorteados = [];
let numeroLimiti = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', )

}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1','Jogo do numero secreto');
  exibirTextoNaTela('p','escolha um numenro de 1 a 10 ');
}
 
exibirMensagemInicial();
function verificarChute (){
    let chute = document.querySelector('input').value;
     
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ` voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto e menor');
        }else{
            exibirTextoNaTela('p','O numero secreto e maior');
        }
       tentativas++
       limparCampo();
    }   
} 
  function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimiti + 1 );
    if (listaDeNumerosSorteados == numeroLimiti) {
        listaDeNumerosSorteados = [];
        }
        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
        }else{
            return numeroEscolhido;
        }

    
 }

  function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
 }
function reiniciarJogo(){
    numeroSecreto =  gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

