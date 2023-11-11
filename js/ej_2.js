/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
*/

const ciudades= [];

while(true){
    let add = prompt("ingresa un nombre de ciudad");
    if(add == null){
        break
    }
    ciudades.push(add);
}
//mostrar longitud del arreglo
document.write(`<p>El arreglo tine una longitud de: --> ${ciudades.length} </p>`);

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<p>elemento en 1er posición: ${ciudades[0]}, elemento en 3er posición ${ciudades[2]}, ultima posicion ${ciudades[ciudades.length-1]}  </p>`);

//Añade en última posición la ciudad de París.
ciudades.push("Paris");
document.write(`<p>ultima posicion ${ciudades[ciudades.length-1]} </p>`);


//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<p>El arreglo que se encuentra en la segunda posición: --> ${ciudades[1]} </p>`);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades.splice(1,1,"Barcelona")
document.write(`<p>${ciudades[1]} </p>`);

