// Definir las propiedades en venta
const propiedades_venta = [
    {
        nombre: 'Casa Moderna',
        src: 'casa1.jpg',
        descripcion: 'Casa moderna con jardín',
        ubicacion: 'Santiago, Chile',
        habitaciones: 3,
        costo: 150000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento Centro',
        src: 'depto1.jpg',
        descripcion: 'Departamento en el centro de la ciudad',
        ubicacion: 'Santiago, Chile',
        habitaciones: 2,
        costo: 85000000,
        smoke: true,
        pets: false
    }
];

// Definir las propiedades en alquiler
const propiedades_alquiler = [
    {
        nombre: 'Casa en la playa',
        src: 'playa.jpg',
        descripcion: 'Hermosa casa frente al mar',
        ubicacion: 'Viña del Mar, Chile',
        habitaciones: 4,
        costo: 1200000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento Familiar',
        src: 'depto2.jpg',
        descripcion: 'Amplio departamento para familias',
        ubicacion: 'Valparaíso, Chile',
        habitaciones: 3,
        costo: 750000,
        smoke: false,
        pets: true
    }
];


function renderizarPropiedades(propiedades, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (contenedor) {
        propiedades.forEach(prop => {
            const card = `
                <div class="card">
                    <img src="${prop.src}" alt="${prop.nombre}">
                    <h3>${prop.nombre}</h3>
                    <p>${prop.descripcion}</p>
                    <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
                    <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
                    <p><strong>Costo:</strong> $${prop.costo}</p>
                    <p><strong>Permite fumar:</strong> ${prop.smoke ? 'Sí' : 'No'}</p>
                    <p><strong>Permite mascotas:</strong> ${prop.pets ? 'Sí' : 'No'}</p>
                </div>
            `;
            contenedor.innerHTML += card;
        });
    } else {
        console.error(`Contenedor con ID ${contenedorId} no encontrado`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarPropiedades(propiedades_venta, 'propiedades-venta');    // Renderizar propiedades de venta en propiedades_venta.html
    renderizarPropiedades(propiedades_alquiler, 'propiedades-alquiler');  // Renderizar propiedades de alquiler en propiedades_alquiler.html
});
