let num1='';
let num2='';
let operacion ='' 


function mostrarEnDisplay(valor){
    let elementoDisplay = document.getElementById('id_display');
    elementoDisplay.innerText = elementoDisplay.innerText + valor;


    if (valor !== '+') {
        concatenarNumero()
    } else {
        num1 += valor;  // Concatenamos el primer número
        elementoDisplay.innerText = num1;  // Mostramos solo el primer número
    }

}


function operacionSumar(){
    esSegundoDigito = '1'
}

function concatenarNumero(numero) {
    if(esSegundoDigito === "0"){
        num1 = num1 + numero;
    }else {
        num2 = num2 + numero;
    }
}

function sumar() {
    // let numPrimero = parseFloat(num1);
    // let numPrimero = parseFloat(num1);
    // let elementoDisplay = document.getElementById('id_display');
    // elementoDisplay.innerText = numPrimero + numSegundo

}

