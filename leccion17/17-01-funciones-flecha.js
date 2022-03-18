let miFuncion = function (){
    console.log('saludos desde mi funcion');
}

//const miFuncionFlecha = () =>{
//    console.log('saludos desde mi funcion flecha');
//}

//const miFuncionFlecha = () => console.log('saludos desde mi funcion flecha');

//miFuncionFlecha();

//const saludar = () => {
//    return 'saludos desde funcion flecha'
//}

const saludar = () => 'saludos desde funcion flecha';


console.log(saludar());

const regresaObjeto = () => ({nombre: 'juan', apellido: 'lara'})
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}



//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('saludos con parametros');



//const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2
    return `resultado: ${resultado}`;
};
console.log(funcionConVariosParametros(3,5));