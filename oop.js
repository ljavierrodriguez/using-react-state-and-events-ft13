// Edficios, Casas, Calles, Parques

// Herencia, Encapsulamiento, Polimorfismo, Abstracción

class Edificio {
    pisos = 0;
    direccion = "";
    nombre = "";
    numero = "";
    ascensores = 1;
    tieneAreasVerdes = true;
    tienePiscina = false;
}

class Persona {
    // propiedades o atributos
    nombre = "";
    apellido = "";
    edad = 0;
    genero = "";

    comer = function(){} // metodo
    dormir = function(){} // metodo
}

class Estudiante extends Persona {
    grado = "";
    facultad = "";
    estaGraduado = false;
}

let estudiantes = [];

for(let i = 0; i < 3; i++){
    let estudiante = new Estudiante(); // definimos un objeto de tipo Estudiante
    estudiante.nombre = `Estudiante ${i+1}`;
    estudiantes.push(estudiante);
}

console.log(estudiantes);