let pilotosDeF1 = document.getElementsByClassName('pilot-f1-atual');

for (let i = 0; i < pilotosDeF1.length; i += 1) {
    
    console.log(pilotosDeF1[i].innerHTML = 'Roberto do Nascimento Natividade Viana');
    
}

let myFunction = () => {for (let i = 0; i < pilotosDeF1.length; i++) {
        pilotosDeF1[i].style.color = "red";
    }
  }; 
myFunction();