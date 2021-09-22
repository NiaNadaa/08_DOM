let op = parseInt(window.prompt(`Qué operación deseas realizar? Escoge una:
1 - Suma
2 - Resta
3 . Multiplicación
4 - División
5 - Resto`));
let num1 = parseInt(window.prompt("Escribe el primer número"));
let num2 = parseInt(window.prompt("Escribe el segundo número"));

if(op===1){
    document.getElementById("main").innerHTML=`La suma de tus números es: ${num1+num2}`;
}else if(op===2){
    document.getElementById("main").innerHTML=`La resta de tus números es: ${num1-num2}`;
}else if(op===3){
    document.getElementById("main").innerHTML=`La multiplicación de tus números es: ${num1*num2}`;
}else if(op===4){
    document.getElementById("main").innerHTML=`La división de tus números es: ${num1/num2}`;
}else if(op===5){
    document.getElementById("main").innerHTML=`El resto de dividir tus números es: ${num1%num2}`;
}else{
    document.getElementById("main").innerHTML=`Los datos intrdoducidos no son correctos`;
};