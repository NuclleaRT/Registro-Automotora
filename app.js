
//Creo el constructor Automovil
function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

//creo 3 instancias usando el constructor automovil
let auto1 = new Automovil("Toyota","Yaris", "Negro", "2018", "Cristobal Ruiz");
let auto2 = new Automovil("Ford","Mustang", "Rojo", "1979", "Javier Lopez");
let auto3 = new Automovil("Nissan","NP300", "Blanco", "2017", "Juan Contreras");

//creo un array que contiene las instancias creadas
let arrayAutos = [auto1,auto2,auto3];


//agrego 3 propiedades nuevas al constructor mediante prototype
Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}

Automovil.prototype.verAuto = function(){
    
    return (this.marca + "\n" + this.modelo + "\n"  + this.anio + "\n"  + this.titular) + "\n" + "\n";

}

Automovil.prototype.encender = function(){
    alert("El automovil esta en Marcha");
}



//muestro los datos en el HTML
function mostrarDatos(){

//busco el id de mi lista ul en el HTML
let mostrar = document.getElementById('listarDatos');

    for(let auto of arrayAutos){
        let crearLista = document.createElement("li");
        crearLista.innerText = auto.verAuto();
        mostrar.appendChild(crearLista);
    }
    return mostrar;
}