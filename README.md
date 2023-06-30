# Prova_ADA
Respostas da prova do processo seletivo da ADA

//PRIMEIRA QUESTÃO
```
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
```

//SEGUNDA QUESTÃO
d. false

//TERCEIRA QUESTÃO
c. 8 2 128 10 12 32

//QUARTA QUESTÃO
e. 1 1 2 1 2 3 1 2 3 4

//QUINTA QUESTÃO
e. 0 2 4 6

//SEXTA QUESTÃO 
a. true
