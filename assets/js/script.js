//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
class Propietario {
    constructor(dueño, Direccion, Telefono) {
        this.dueño = dueño;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
    }
    datosPropetario() {
        return `el nombre del dueño es ${this.dueño} el numero telefonico es 
        ${parseInt(this.telefono)} y la direccion es ${this.Direccion}`
    }
}
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
class Animal extends Propietario {
    constructor(dueño, Direccion, Telefono, tipo) {
        super(dueño, Direccion, Telefono)
        this.tipo = tipo;
    }
    //GETTER 
    get getTipo() {
        this.tipo = tipo;
    }
}
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
class Mascota extends Animal {
    constructor(nombreMascota, enfermedad, tipo) {
        super(tipo)
        this.nombreMascota = nombreMascota;
        this.enfermedad = enfermedad;
    }
    //GETTER 
    get getNombreMascota() {
        return this.nombre = nombre;
    }
    get getEnfermedad() {
        return this.enfermedad = enfermedad;
    }
    //SETTER 
    set setNombreMascota(nombre) {
        this.nombre = nombre;
    }
    set setenfermedad(enfermedad) {
        this.enfermedad = enfermedad;
    }
    datosAnimal() {
        return `la mascota es de tipo: ${this.tipo} y el nombre de la mascota es ${this.nombreMascota} y la enfermedad que tiene es: ${this.enfermedad}`
    }
}
//-+-+-+--+++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// const dueño = new Propietario('JUAN', 'renca', 972751229)
// const tipo = new Animal('JUAN', 'RENCA', 972751229, 'GATO')
// const animal = new Mascota('pedrito', 'dolor de guata', 'gato')
// console.log(dueño.datosPropetario())
// console.log(tipo)
// console.log(animal.datosAnimal())
//-+-+-+--+++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
const agregar = document.getElementById('agregar')
const Formulario = document.getElementById('form')
const propietario = document.getElementById('propietario')
const Direccion = document.getElementById('direccion')
const NombreMascota = document.getElementById('nombreMascota')
const TipoAnimal = document.getElementById('tipo')
const Enfermedad = document.getElementById('enfermedad')
const telefono = document.getElementById('telefono')
const resultado = document.getElementById('resultadocard')
const animalacumlable = []

//-+-+-+--+++-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

agregar.addEventListener('click', (e) => {
    e.preventDefault()
    const tododueño = new Propietario(
        propietario.value,
        propietario.value,
        parseInt(telefono.value));
    const todomascota = new Mascota(
        NombreMascota.value,
        Enfermedad.value,
        TipoAnimal.value);
    //trate de que se juntara las carta pero me enrede
    // animalacumlable.push(todomascota, tododueño);
    // console.log(animalacumlable);
    //------------------------------------------------------
    //PRUEBA QUE FUNCIONE
    console.log(tododueño)
    console.log(todomascota)
    console.log(tododueño.datosPropetario())
    console.log(todomascota.datosAnimal())

    const pegar = () => {
        return resultado.innerHTML = `
        <div class="card text-center" style="width: 18rem;  mb-5 mt-5">
        <div class="card-body">
            <p class="card-text">${todomascota.datosAnimal()}</p>
            <p class="card-text">${tododueño.datosPropetario()}</p>          
        </div>
        </div>
        `
    }
    pegar()

})