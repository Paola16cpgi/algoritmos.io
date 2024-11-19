//TIPOS DE DATOS PRIMITIVOS 
let nombre = 'Felipe'; //declaramos e inicializamos la variable
let edad = 27;
let mayorEdad = true;
let vacio = null;
let xyz;

console.log(typeof nombre);
console.log(edad);
console.log(typeof mayorEdad);
console.log(typeof vacio);
console.log(typeof xyz);

// TIPO DE DATOS COMPUESTOS 

let frutas =['Pera','Manzana','Sandia']; // Es de tipo objeto Arreglo

console.log(typeof frutas);

let auto={
    marca: 'Mazda',
    modelo: 2024,
    color: 'Azul',
    placa: 'TDE221',
    tipo: 'camioneta',
    unicoDueño: true,
}

console.log(typeof frutas);
console.log(typeof auto);

// CONCATENANDO VARIBALES EN MENSAJES

console.log('Hola ' + nombre + ' tienes ' + edad  + ' años');

//ESTRUCTURAS CONDICIONALES
console.log('------------------');
let calificacion = 65;

if (calificacion>=90) {
    console.log('Muy buen trabajo ' + nombre +  'tu nota fue ' + calificacion );
}
else if(calificacion>=70) {
    console.log('Aprobaste ' + nombre + 'tu nota fue ' + calificacion );
}

else if(calificacion>=50) {
    console.log('Reprobaste ' + nombre + ' tu nota fue ' + calificacion );
}
else{
    console.log('Tremendo perdedor ' + nombre + ' su porqueria de nota es ' + calificacion );
}

console.log(calificacion);

let dia = 'Miercoles';
switch (dia) {
    case 'Lunes':
        console.log('Empezando semana, que pereza')
        break;
    case 'Martes':
        console.log('Peor que el lunes')
        break;
    case 'Miercoles':
            console.log('Mitad de semana por fin')
        break;
    case 'Jueves':
            console.log('Juernes')
        break;
    case 'Viernes':
        console.log('Que no me esperen en la casa')
        break;
    case 'Sabado':
        console.log('Pasando guayabo')
        break;
    case 'Domingo':
        console.log('Todos a misa o culto, a reflexionar')
        break;
    default:
        break;
}

// ESTRUCTURAS DE BUCLES
let numero = 1;


while(numero <=10) {
    console.log('Ahora el numero es: ' + numero);
    numero ++;
} 

// ciclo FOR 

//let i=10;


for(let i = 100; i>0; i = i-10) {
    console.log(' Este es el numero ' +i)
}

//FUNCIONES
function suma(valor1, valor2) {
    return valor1+valor2;
}

let resultado = suma(8, 24);
console.log('El resultado es ' + resultado);
