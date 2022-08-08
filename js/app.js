//Variables
const resultado = document.querySelector('#resultado');


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    cargarAutos();
})



//Funciones

function cargarAutos(){
    autos.forEach(auto =>{
        
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;

        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
    
            ${marca} ${modelo} - ${year} - ${puertas} puertas - Transmisión: ${transmision} 
            - Precio: ${precio} - Color: ${color}
              
        `;

        //Insertando el HTML
        resultado.appendChild(autoHTML);
    })
}


