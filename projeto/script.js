/*import * as fs from 'fs';*/

//Criando ordenação de numeros
const input1 = document.querySelector(".input1");
const btnConvert = document.querySelector(".btn-primary");

function sortNumbers(inputText) {
  let numArray = inputText.split(",");
  numArray.sort((a,b) => {return a - b});

  document.getElementById("h").innerText = (` ${ numArray} `); 
  console.log(numArray)

 


  return  numArray;
}



btnConvert.addEventListener('click', function () {
  sortNumbers(input1.value);

});




 //Gerador de Tabuada 
 function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
  }

  
    
 
           

