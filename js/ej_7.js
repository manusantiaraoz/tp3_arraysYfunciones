/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

let tabla = (x)=>{
    for(i=1;i<11;i++){
        document.write(`<p> ${x} x ${i}= ${x*i}</p>`)
    }
}

let numero = parseInt(prompt("ingresa un numero y se mostrará su tabla"))

tabla(numero);