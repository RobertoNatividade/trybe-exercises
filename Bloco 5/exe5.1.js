
/* let x = ['ana', 'maria', 'zeus']

x.forEach(name => {
    console.log(name + 'Is the best!')
}) */ 
let a  = document.getElementsByTagName('p');
function mudarConteudo() {

    for (let i = 0; i < a.length; i += 1) {
        a[i].innerHTML = 'hoje'.toUpperCase();
    }
}




function corrigirTag(){
    let v = document.querySelector('h1');
    v.innerHTML = 'Exercício 5.1 - JavaScript';
}



function mudarCor() {
    document.querySelector('.center-content').style.backgroundColor = 'white';
    document.querySelector('.main-content').style.backgroundColor = 'rgb(76,164,109)'
}


function chamaTodas(){
    mudarConteudo()
    corrigirTag()
    mudarCor()
}

chamaTodas()


