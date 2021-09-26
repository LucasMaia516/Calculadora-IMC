
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

    if (nome !=='' && altura !== '' && peso !==''){
      
        const valorIMC = (peso/ (altura*altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso ideal!';
        } else if(valorIMC < 25){
            classificacao = 'no peso ideal!';
        } else if (valorIMC < 30){
            classificacao = 'levemente acima do peso!';
        } else if (valorIMC <35){
            classificacao = 'com obesidade grau 1, cuidado!!!';
        } else if (valorIMC <40){
            classificacao = 'com obesidade grau 2, cuidado!!!'
        } else {
            classificacao = 'com obesidade grau 3, obesidade morbida. CUIDADO!!!'
        }

         resultado.textContent = `${nome} seu IMC é de ${valorIMC}, você está ${classificacao}`;
        
         } else {
        
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc );
