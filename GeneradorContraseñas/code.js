var checkTodos = document.getElementById('selTodos');
var longitud = document.getElementById('longitudC');
var minusculas = document.getElementById('minusculas');
var mayusculas = document.getElementById('mayusculas');
var numeros = document.getElementById('numeros');
var cespeciales = document.getElementById('cespeciales');
var regexMayuscula = '(?=.*[A-Z])'
var regexMinuscula = '(?=.*[a-z])'
var regexNumero = '(?=.*[0-9])';
var regexCaracterspecial = '(?=.*[!#$%&*@]){2,}';

checkTodos.addEventListener('change',() => {
    var seleccionado = checkTodos.checked
    //esto se puede hacer mediante un array de elementos 
    if(seleccionado){
        minusculas.checked = true;
        mayusculas.checked = true;
        numeros.checked = true;
        cespeciales.checked = true;
    }else{
        minusculas.checked = false;
        mayusculas.checked = false;
        numeros.checked = false;
        cespeciales.checked = false;
    }
})

document.querySelector('form').addEventListener('submit',(e) => {
    e.preventDefault();
    let passwordValido = Object;
    do{
        passwordValido = generarPassword();
    }while(passwordValido.valido == false)
    
    if(passwordValido.valido)
        alert("El password generado es: " + passwordValido.password) 
})

const generarPassword = () => {

    //caracteres ASCII especiales
    var cepecialesArr = [33,35,36,37,38,42,64];
    var caracteresASCII = [];
    var regexCompleto = '^';
    var password = '';

    if(longitudC.value == '' || (Number(longitudC.value) < 8 || (Number(longitudC.value) > 15))){
        alert('El campo Numero caracteres debe de contener un digito entre 8 y 15');
        return false;
    }
    if((!minusculas.checked) && (!mayusculas.checked) &&
        (!numeros.checked) && (!cespeciales.checked)){
        alert('Debe de seleccionar por lo menos una de las opciones');  
        return false;
    }
    
    //minusculas ASCII 97-122
    if(minusculas.checked){
        regexCompleto += regexMinuscula;
        for(var i = 97; i <= 122; i++){
            caracteresASCII.push(i);
        }
    }
    //mayusculas ASCII 65 -90
    if(mayusculas.checked){
        regexCompleto += regexMayuscula;
        for(var i = 65; i <= 90; i++){
            caracteresASCII.push(i);
        }
    }
     //numeros ASCII 48 - 57
    if(numeros.checked){
        regexCompleto += regexNumero;
        for(var i = 48; i <= 57; i++){
            caracteresASCII.push(i);
        }
    }
    if(cespeciales.checked){
        regexCompleto += regexCaracterspecial;
        for(var i = 0; i < cepecialesArr.length ; i++){
            caracteresASCII.push(cepecialesArr[i]);
        }
    }

    for(var j = 0; j < Number(longitud.value); j++){
        let carAleatorio = caracteresASCII[Math.floor(Math.random() * caracteresASCII.length)];
        password += String.fromCharCode(carAleatorio)
    }
 
    regexCompleto += '.+$';
    var regexformat = new RegExp(regexCompleto, "i");
    return regexformat.test(password) ? {password: password, valido: true} : {password: password, valido: false};

}