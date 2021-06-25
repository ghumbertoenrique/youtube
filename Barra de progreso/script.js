const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circulo');

let currentActive = 1;

siguiente.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circulos.length) {
        currentActive = circulos.length;
    }

    update();

} );

anterior.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }
    
    update();

} );

function update(){
    circulos.forEach( (circulo, index) => {
        if (index < currentActive) {
            circulo.classList.add('active');   
        } else {
            circulo.classList.remove('active');
        }

    } );

    const actives = document.querySelectorAll('.active');

    progreso.style.width = ((actives.length -1) / (circulos.length -1) )*100 + '%';

    if (currentActive === 1) {
        anterior.disabled = true;
    } else if (currentActive === circulos.length) {
        siguiente.disabled = true;
    } else {
        anterior.disabled = false;
        siguiente.disabled = false;
    }

}
