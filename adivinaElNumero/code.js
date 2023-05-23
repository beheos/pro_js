var contador = 0;
var juegoIniciado = false;
var contenedor = document.getElementById('contenedor');
var btnInicio = document.getElementById('btnInicio');
var numeroGenerado = 0;

btnInicio.addEventListener('click', () => {   
    if (!juegoIniciado) {
        juegoIniciado = true;
        let numeroAadivinar = document.createElement('input');
        let btnValidar = document.createElement('button');
        numeroAadivinar.id = 'numeroAadivinar';
        btnValidar.innerHTML = 'Validar';
        btnValidar.id = 'btnValidar';
        btnValidar.onclick = function(){
            buscarNumero(numeroAadivinar.value);
        }
        contenedor.appendChild(numeroAadivinar);
        contenedor.appendChild(btnValidar);
        btnInicio.style.display = 'none';
        numeroGenerado = Math.floor(Math.random() * 100) + 1;
        alert('Es ahora de adivinar el número.');
    }
    //se puede hacer de esta manera o esta otra una es dentro y la otra es mandando a llamar la funcion
    //a mi manera de ver es lo mas correcto
    /*btnValidar.addEventListener('click', () => {
        if(numeroAadivinar.value != numeroGenerado){
             alert(numeroAadivinar.value > numeroGenerado ? 'El numero oculto es MENOR al que proporcionaste' : 'El numero oculto es MAYOR al que proporcionaste');
            contador++;
        }else{
            alert('FELICIDADES encontrasete el numero en ' + contador + ' intentos');
            location.reload();
        }
        if(contador > 5){
            alert('Sobrepasaste el limite, el numero a adivinar es: ' + numeroGenerado);
            location.reload();
        }
    });*/
});

const buscarNumero = (numero) => {
    if(numero != numeroGenerado){
        alert(numero > numeroGenerado ? 'El numero oculto es MENOR al que proporcionaste' : 'El numero oculto es MAYOR al que proporcionaste');
       contador++;
   }else{
       alert('FELICIDADES encontrasete el numero en ' + contador + ' intentos');
       location.reload();
   }
   if(contador > 5){
       alert('Sobrepasaste el limite, el numero a adivinar es: ' + numeroGenerado);
       location.reload();
   }
}

