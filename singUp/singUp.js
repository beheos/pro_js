document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    if(validarCampos()){
        alert("Te registraste Exitosamente");
        limpiarCampos()
    }
})

const validarCampos = () => {
    var usuario = document.querySelector('#usuario').value
    var password = document.querySelector('#password').value
    var correo = document.querySelector('#correo').value

    let regexUsuario = /^[a-zA-Z0-9]{8,}$/
    let regexPassword = /^[a-zA-Z0-9$%&_.-.*+#]{8,}$/
    let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!regexUsuario.test(usuario)){
        alert('el usuario permiten caracteres alfanumericos y una longitud minima de 8 caracteres')
        return false;
    }
    if(!regexPassword.test(password)){
        alert('solo se permiten alfanumericos y los caracteres $%&_.-.*+# además de una longitud de 8 caracteres minimo')
        return false;
    }
    if(!regexCorreo.test(correo)){
        alert('el formato del correo npo es correcto')
        return false;
    }

    return true
}

const limpiarCampos = () => {
    document.querySelector('#usuario').value = ''
    document.querySelector('#password').value = ''
    document.querySelector('#correo').value = ''
}
