/* 
Acesse o elemento elementoOndeVoceEsta . ok 
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. ok 
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai . */

function addColorPai(){
    document.querySelector('#pai').style.color = 'red'
}
addColorPai()

Math.random()*60
