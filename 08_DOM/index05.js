let num1 = parseInt(window.prompt("Escribe un número"));
let num2 = parseInt(window.prompt("Escribe otro número"));


document.getElementById("suma").innerHTML=`La suma de tus números es: ${num1+num2}`;
document.getElementById("suma").style.color="red";
document.getElementById("suma").style.background="blue";

document.getElementById("resta").innerHTML=`La resta de tus números es: ${num1-num2}`;
document.getElementById("resta").style.color="yellow";
document.getElementById("resta").style.background="green";

document.getElementById("multi").innerHTML=`La multiplicación de tus números es: ${num1*num2}`;
document.getElementById("multi").style.color="orange";
document.getElementById("multi").style.background="black";

document.getElementById("divi").innerHTML=`La división de tus números es: ${num1/num2}`;
document.getElementById("divi").style.color="blue";
document.getElementById("divi").style.background="pink";

document.getElementById("resto").innerHTML=`El resto de dividir tus números es: ${num1%num2}`;
document.getElementById("resto").style.color="violet";
document.getElementById("resto").style.background="lightblue";