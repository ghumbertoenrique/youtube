const abierto = document.getElementById('abierto');
const cerrar = document.getElementById('cerrar');
const contenedor = document.querySelector('.contenedor');


abierto.addEventListener(
    'click', 
    () => contenedor.classList.add('show-nav') 
    );

cerrar.addEventListener(
    'click', 
    () => contenedor.classList.remove('show-nav') 
    );