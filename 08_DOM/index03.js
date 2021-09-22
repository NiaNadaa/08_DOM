let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("Dime tu edad"));
        
if(edad<18){
            document.getElementById("main").innerHTML=`Hola ${nombre}, eres menor de edad`; 
        }else{
            document.getElementById("main").innerHTML=`Hola ${nombre}, eres mayor de edad`;
        }

edad<18?document.getElementById("main").innerHTML=`Hola ${nombre}, eres menor de edad`:document.getElementById("main").innerHTML=`Hola ${nombre}, eres mayor de edad`;

switch(edad>=18){
    case true: document.getElementById("main").innerHTML=`Hola ${nombre}, eres mayor de edad`
    break;
    case false: document.getElementById("main").innerHTML=`Hola ${nombre}, eres menor de edad`
    break;
};