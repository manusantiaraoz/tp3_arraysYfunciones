/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

*/

let parImpar =(n)=>n%2==0 ? document.write(`${n} es par`) : document.write(`${n} es impar`);

let numero = parseInt(prompt("ingrese un numero"));

parImpar(numero);