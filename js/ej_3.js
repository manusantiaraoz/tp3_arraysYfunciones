/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
let dado1;
let dado2;
let suma =[];
let dos=0, tres=0, cuatro=0;
let cinco=0,seis=0,siete=0;
let ocho=0, nueve=0, diez=0;
let once=0,doce=0;
let info=[];

for(let i = 0; i < 50; i++){
    dado1= Math.ceil(Math.random()*6);
    dado2= Math.ceil(Math.random()*6);
    let dato= dado1+dado2;
    suma.push(dato)
    
};

console.log(suma);

for(let i=0;i<suma.length;i++){

    if(suma[i]==2){
        dos++
    }else if(suma[i]==3){
        
        tres++
    }else if(suma[i]==4){
        
        cuatro++
}else if(suma[i]==5){
    
    cinco++
}else if(suma[i]==6){
    
    seis++
}else if(suma[i]==7){
    
    siete++
}else if(suma[i]==8){
    
    ocho++
}else if(suma[i]==9){
    
    nueve++
}else if(suma[i]==10){
    
    diez++
}else if(suma[i]==11){
    
    once++
}else if(suma[i]==12){
    
    doce++
}
}
info.push("2= "+dos,"3= "+ tres,"4= "+ cuatro,"5= "+cinco,"6= "+seis,"7= "+siete,"8= "+ocho,"9= "+ nueve,"10= "+ diez,"11= "+once,"12= "+doce);


info.forEach(element => {
    document.write(`<p> ${element} </p>`);
});


