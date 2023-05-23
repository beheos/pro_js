var propina10 = document.getElementById('10');
var propina15 = document.getElementById('15');
var propina20 = document.getElementById('20');
var propinaOtro = document.getElementById('otro');
var valOtro = document.getElementById('valOtro');
var monto = document.getElementById('monto');
var divPropina = document.getElementById('divPropina');
var labelPropina = document.createElement('label');
var form = document.querySelector('form');
var radios = document.getElementsByName('propina');
var borrar = document.getElementById('borrar');
var propina = 0;
var totalPropina = 0;
var total = 0;
valOtro.style.display = 'none';

const calcularPropina = () => {
    
    if(monto.value == ''){
        alert('No ha ingresado el monto a pagar');
        return false;
    }    

    labelPropina.innerHTML = '';
    if(porPropina())
    labelPropina.innerHTML = 'tu propina seria de $' + parseFloat(propina)  + " MN";
    divPropina.appendChild(labelPropina);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    total = 0;
    if(monto.value == ''){
        alert('No ha ingresado el monto a pagar');
        return false;
    }  
    if(porPropina()){
        total = eval(parseFloat(monto.value) + propina);
        alert("El pago a realizar con propina incluido es de: " + total);
    }
})

const porPropina = () => {

    if(!propina10.checked && !propina15.checked && !propina20.checked
        && !propinaOtro.checked){
            alert('debe de seleccionar una opcion');
        return false;
    }

    if(propina10.checked){
        propina = monto.value * .10;
    }else if(propina15.checked){
        propina = eval(monto.value * .15);
    }else if(propina20.checked){
        propina = monto.value * .20;
    }else if(propinaOtro.checked){
        if(valOtro.value.trim() == ''){
            alert('Debe de ingresear un numero de porcentaje');
            return false;
        }
        propina = monto.value * (valOtro.value / 100);
    }
    return true;
}

radios.forEach(function(radio){
    radio.addEventListener('change', () => {
        if(radio.id == "otro")
            valOtro.style.display = 'block'
        else
        valOtro.style.display = 'none'
    })
})

const reiniciar = () => {
    location.reload();
}