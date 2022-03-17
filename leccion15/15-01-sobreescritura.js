class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
 }  

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}


function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente ){
        console.log('es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log('es un objeto de tipo Empleado');
        console.log(tipo.departamento);
    }
    else if ( tipo instanceof Object){
        console.log('es un tipo object');
    }
}

let empleado1 = new Empleado('juan', 3000);

let gerente1 = new Gerente('carlos', 5000, 'sistemas');

determinarTipo (empleado1);
determinarTipo(gerente1);