let edad = parseInt(window.prompt("Escribe tu edad"));
let nombre;
let apellido;
let ciudad;
let dias;
let coste;

if(edad<18){
    document.getElementById("main").innerHTML=`Lo sentimos, no puedes alquilar un coche`
}else{
    nombre = window.prompt("Escribe tu nombre")
    apellido = window.prompt("Escribe tu apelldio")
    ciudad = window.prompt("Indica en qué ciudad quieres alquilar el coche")
    dias = parseInt(window.prompt("¿Cuántos días quieres alquilar el coche?"))
        if(coste<7){
            coste=dias*25
        }else if(dias=7){
            coste=150
        }

    document.getElementById("main").innerHTML=`Bienvenido ${nombre} ${apellido},
    el alquiler del coche en ${ciudad} por ${dias} días costará ${coste} Euros `
};