for (let x=0; x < 5; x++) {
    if(x == 2) continue;
    console.log(x);
}

let a = 10;
a = a + 5;
a += 5;

let x = 10;
x **= 5;
console.log(x);

// tipo fecha
const fecha = new Date("2024-05-03");

function myFunction(p1, p2) {
    return p1 * p2;
}

console.log(myFunction(4, 3));
console.log(myFunction());
console.log(myFunction(4));
console.log(myFunction)();

let otrafuncion = (a,b) => a * b;

let otrafuncion2 = (a,b) => {
    return a * b
}

console.log(otrafuncion(4,80));


// FUNCION AUTOEJECUTABLE

( ()=> console.log("Esta es una funcion anonima autoejecutable"))();

let alumno = {
    nombre: "Juan", 
    apelldo: "Perez",
    matricula : 95043,
    nombrecompleto : () => this.nombre + " " + this.apellido 
}
console.log(alumno.nombrecompleto());