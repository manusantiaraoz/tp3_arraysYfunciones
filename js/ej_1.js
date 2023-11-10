const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

document.write(`<ul>`);
for(i=0;i<=meses.length-1;i++){
    //console.log(meses[i]);
    document.write(`<li>${meses[i]}</li>`);
};
document.write(`</ul>`);