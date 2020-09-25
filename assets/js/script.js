class Propietario{
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `Los datos del propietario son: ${this.nombre}, ${this.direccion} y ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo) {
        super(nombre, direccion, telefono);
        this.nombreAnimal = nombreAnimal;
        this.tipo = tipo;
    }

    datosAnimal() {
        return `Los información  del animal es: nombre: ${this.nombreAnimal}, tipo: ${this.tipo}.`;
    }
}

class Perro extends Animal {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
        super(nombre, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(enfermod) {
        this._enfermedad = enfermod;
    }
}

class Gato extends Animal {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
        super(nombre, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(enfermod) {
        this._enfermedad = enfermod;
    }
}

class Conejo extends Animal {
    constructor(nombre, direccion, telefono, nombreAnimal, tipo, enfermedad) {
        super(nombre, direccion, telefono, nombreAnimal, tipo);
        this._enfermedad = enfermedad;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(enfermod) {
        this._enfermedad = enfermod;
    }
}

let due = new Propietario('Ema', 'La Florida', '2913194');
let masc = new Animal('Ema', 'La Florida', '2913194', 'Katara', 'Conejo');


console.log(masc.datosAnimal());


let formulario = document.querySelector('form');

let instancias = (event)=> {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    let mascota = new Perro(propietario, direccion, telefono, nombreMascota, tipo, enfermedad);

    let due = new Propietario(propietario,direccion,telefono);

    document.getElementById('resultado').innerHTML = `
    <ul>
        <li>${due.datosPropietario()}</li>
        <li>${mascota.datosAnimal()}</li>
    <ul>`;
}

formulario.addEventListener('submit', instancias);