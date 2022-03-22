let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('resolvio correcto')
    else
        rechazar('se produjo un error')
});

//miPromesa.then(valor => console.log(valor),error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('inicio promesa');
    setTimeout(() => resolver('saludos con promesa y timeout'),3000);
     //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesa y async'
}

miFuncionConPromesa().then(valor => console.log(valor));