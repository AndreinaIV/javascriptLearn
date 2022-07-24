"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
} 
//SEAL ES DIFERETE A FREEZE PORQUE PERMITE MODIFICAR EL OBJETO PERO NO INSERTAR NI ELIMINAR
Object.seal( producto );

producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio; 

console.log(producto);

console.log(Object.isSealed(producto));
