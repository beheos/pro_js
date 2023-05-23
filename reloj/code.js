var contenedor = document.getElementById('contenedor');

const mostrarHora = () => {

    var reloj = new Date();
    var horas = reloj.getHours();
    var minutos = reloj.getMinutes();
    var segundos = reloj.getSeconds();
    
    let relojFromateado = (horas < 10 ? "0" + horas: horas) + ":"
                        + (minutos < 10 ? "0" + minutos : minutos) + ":"
                        + (segundos < 10 ? "0" + segundos : segundos); 
    
    contenedor.innerHTML =  relojFromateado;
}

setInterval(mostrarHora, 1000);