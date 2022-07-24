// .filter crea un nuevo arreglo con la condición que se esté revisando en ese momento. 
//Es versatil porque se puede ver el indice de nombre y precio, segun se requiera
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 );
resultado = carrito.filter( producto => producto.precio < 600 );
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');

console.log(resultado);

// Es muy utilizado el .filter