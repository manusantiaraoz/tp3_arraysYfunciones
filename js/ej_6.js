/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

*/

let perimetro =(a,b)=>document.write(`el area de su rectangulo es ${2*(a+b)}`)

let a = parseFloat(prompt("ingrega el valor de lado a"));
let b = parseFloat(prompt("ingrega el valor de lado b"));

perimetro(a,b);