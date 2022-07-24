const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

/* const nombre = producto.nombre;
console.log(nombre); */


//Destructuring
const { disponible } = producto;

console.log(disponible);

//Destructuring con arreglos o arrives
const numeros = [10,20,30,40,50];

//const [ , , , , quinto] = numeros; Se puede dejar espacios separados de coma para reemplazar el valor

const [ primero, ...tercero] = numeros;


console.log(tercero);