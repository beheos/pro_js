let form = document.querySelector('form');
let usuariosRegistrados = [{usuario:'beheos', password: '123'},
                           {usuario:'vegetta77', password: '1234'},
                           {usuario:'codewars', password: '12345'}]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value

    //let respuesta = usuariosRegistrados.filter(data => usuario == data.usuario).filter(data => password == data.password)
    //respuesta.length > 0 ? window.location.href = "https://google.com" : alert('Usuario o Password incorecto')
    //opcion de C
    const usuarioRegistrado = usuariosRegistrados.find(u => u.usuario === usuario && u.password === password);
    usuarioRegistrado == true ? window.location.href = "https://google.com" : alert('Usuario o Password incorecto')
})