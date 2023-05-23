var tProducto = document.getElementById('tProducto');
var agregar = document.getElementById('agregar');
var producto = document.getElementById('producto');
var precio = document.getElementById('precio');
var borrar = document.getElementById('borrar');
borrar.disabled = true;

agregar.addEventListener('click', (e) => {
    if(producto.value  == '' || precio.value == ''){
        alert('Los campos son obligatorios');
        return false;
    }

    var fila = tProducto.insertRow(-1);
    var cellProducto = fila.insertCell(0);
    var cellPrecio = fila.insertCell(1);
    var cellOpcion = fila.insertCell(2);
    var btnEliminar = document.createElement('button');
    
    btnEliminar.innerHTML = 'Eliminar';
    btnEliminar.style.color = 'red';
    btnEliminar.onclick = function(){
        var filaEliminar = this.parentNode.parentNode;
        filaEliminar.parentNode.removeChild(filaEliminar);
        activarBorton();
    }
    cellOpcion.appendChild(btnEliminar);
    var textProducto = document.createTextNode(producto.value);
    cellProducto.appendChild(textProducto);
    var textPrecio = document.createTextNode(precio.value);
    cellPrecio.appendChild(textPrecio);
    limpiarCampos();
    activarBorton();
})

const limpiarCampos = () => {
    producto.value = '';
    precio.value = '';
}

const activarBorton = () => {
    if(tProducto.rows.length > 0){
        borrar.disabled = false;
    }else{
        borrar.disabled = true;
    }
}

borrar.addEventListener('click', () => {
    while(tProducto.rows.length > 0){
        tProducto.deleteRow(0);
    }
    activarBorton();
})