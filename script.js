//PRIMEIRA QUESTÃO
function primo(){
    var numero = parseInt(document.getElementById('numero').value);
    var resposta = document.getElementById('resposta');
    var divisores=0;
    
if (numero <= 0){
    resposta.innerHTML = 'Não é possível verificar se este número é primo.';
} else {
        for(var count=1 ; count<=numero ; count++){
            if(numero % count == 0){
                divisores++;
            
                if(divisores==2){
                    resposta.innerHTML='O número é primo';
                } else {
                    resposta.innerHTML='O número não é primo';
                }
            }
        }
    }
}
