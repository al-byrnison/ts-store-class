import { Store } from './Store';

const someStore = new Store();

// Agregar incidentes TEST
someStore.addIncident('El suelo en la zona de congelados está sucio');
someStore.addIncident('La luz de la tienda está parpadeando');
someStore.addIncident('Falta mercancía en el estante de productos');
someStore.addIncident('Objetos bloqueando pasillo central');
someStore.addIncident('Cajas mal apiladas en bodega');
someStore.addIncident('Se requiere supervisor en cajas');
someStore.addIncident('Faltan carros en entrada');
someStore.addIncident('Reponer etiquetas en báscula de frutas y verduras');
someStore.addIncident('Atención en mesón servicio al cliente');
someStore.addIncident('Supervisión en ingreso a bodega');
// ...

// Cerrar casos (índex)
someStore.closeIncident(2);
someStore.closeIncident(5);
someStore.closeIncident(6);

// Obtener el estado de los casos
const status = someStore.incident_status();

// Salida en consola
console.log('someStore.incident_status()');
console.log(status);