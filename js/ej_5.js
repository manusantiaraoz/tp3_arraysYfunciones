/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

let infoCadena =(x)=>{
    if(x === x.toUpperCase()){
        document.write(`<p> el string tiene solo mayusculas</p>`)
    }else if(x === x.toLowerCase()){
        document.write(`<p> el string tiene solo minusculas</p>`)
    }else{
        document.write(`<p> el string tiene mayusculas y minusculas</p>`)
    }
}
let cadena = prompt("ingresa una palabra");

infoCadena(cadena);
