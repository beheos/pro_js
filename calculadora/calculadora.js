let display = document.getElementById('display');
display.readOnly = true;

//function validateInput(inputElement) {
  //  const inputValue = inputElement.value;
   //const caracterresPermitidos = /[0-9=+\-*/]/;
  
   /*let cadenaCarateres = '';
  
    for (let i = 0; i < inputValue.length; i++) {
      const caracter = inputValue[i];
      if (caracterresPermitidos.test(caracter)) {
        sanitizedInput += caracter;
      }
    }
    inputElement.value = cadenaCarateres;
  }*/
  
const clickBoton = (numero) => {
        if(display.value.length > 0){
            if(display.value[0] == 0)
            display.value = Number(numero);
            else
            display.value += Number(numero);
        }else{
            display.value += Number(numero);
        }  
}

const borrar = () => {
    display.value = '';
}

const operador = (valor) => {
    display.value += valor;
}
  
const resultado = () => {
      let res = 0;
      display.value = display.value.replace('x','*');
      display.value = display.value.replace('÷','/');
      res = eval(display.value);
    display.value = res;
  }
  
