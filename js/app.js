//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');


const yearMax = new Date().getFullYear(); //obtiene el anio actual
const yearMin = yearMax - 10;

//Objeto de busqueda

const datosBusqueda = {

    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    cargarAutos(autos); //muestra los autors al cargar la pagina
    yearsSelect(); //Ingresa los años del select anios
})

//Eventos de los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})


//Funciones

function cargarAutos(autos) {

    limpiarHTML();

    autos.forEach(auto => {

        //utilizando destructuring
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;

        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
    
            ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} 
            - Precio: ${precio} - Color: ${color}
              
        `;

        //Insertando el HTML
        resultado.appendChild(autoHTML);
    })
}

//Elimina el HTML previo
function limpiarHTML() {
    //mientras exista algo
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Ingresa los años al select
function yearsSelect() {

    for (let i = yearMax; i > yearMin; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones del año al select
    }
}

//Funcion de alto nivel
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        cargarAutos(resultado);
    } else {
        sinResultados();
    }
}


function sinResultados(){

    limpiarHTML();

    const sinResultados = document.createElement('div');
    sinResultados.classList.add('alerta','error');
    sinResultados.textContent = 'No Hay Resultados De Busqueda';
    resultado.appendChild(sinResultados);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {

    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {

    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;

}
function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}