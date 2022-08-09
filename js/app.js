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
    cargarAutos(); //muestra los autors al cargar la pagina
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
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.vale;
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.vale;
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
})


//Funciones

function cargarAutos() {
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    console.log(resultado);
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