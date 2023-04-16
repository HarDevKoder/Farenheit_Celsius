// Tipado estricto
'use strict';
cuadroResultados.style.display='none';
//  Cargar JS después de HTML
window.addEventListener('load',()=>{
// Escribir aquí las instrucciones del script
const btnConvertir=document.getElementById('btnConvertir');
const cuadroResultados=document.getElementById('cuadroResultados');
const formulario=document.getElementById('formulario');
btnConvertir.addEventListener('click',()=>{
    let dato=document.getElementById('dataIn').value;
    if(dato==0){
        alert('Ingresa Dato a convertir');
    }else{
        cuadroResultados.style.display='block';
        let res=((dato-32)*5)/9;
        cuadroResultados.innerHTML= `${res.toFixed(1)} º Celsius `;
        formulario.reset();
    }
   
})





 





















//Fin del programa principal
})