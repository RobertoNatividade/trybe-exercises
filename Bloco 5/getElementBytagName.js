// O retorno do elemento recuperado é em formato de lista, e nunca retorna apenas um elemento


document.getElementsByClassName('paragraph')[0].innerText = 'Substituta';/*'Turma do Cascão'*/
//recover = 'background: black';
//console.log(recover);

let sub = document.getElementsByTagName('p')[1].innerText = 'Turma da Magali';
console.log(sub);
