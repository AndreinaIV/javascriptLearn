//Declaración de Función (Function Declaration)

function sumar() {
   console.log( 2 + 2 );
}

sumar();
//Las funciones son reutilizables
sumar();
sumar();

//Expresión de Funcion (Function Expression)
const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2();

//La diferencia entre la Declaración de Función y la Expresión de Función
//es que la expresión se crea más como una variable.