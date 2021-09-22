let nombre = window.prompt("Escribe tu nombre");
let edad = parseInt(window.prompt("Dime tu edad"));
        
if(edad<18){
            document.getElementById("main").innerHTML=`Hola ${nombre}, eres menor de edad`;
            document.getElementById("main").style.color="red";
        }else{
            document.getElementById("main").innerHTML=`Hola ${nombre}, eres mayor de edad`;
            document.getElementById("main").style.color="green";
        }

edad<18?document.getElementById("main").innerHTML=`Hola ${nombre}, eres menor de edad`:document.getElementById("main").innerHTML=`Hola ${nombre}, eres mayor de edad`;