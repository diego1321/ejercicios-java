let hora = 14;
let tiempo;

if ( hora >= 6 && hora <= 11){
    tiempo = "buenos dias";
}
else if( hora >= 12 && hora <= 18){
    tiempo = "buenas tardes";
} 
else if( hora >= 19 && hora <= 24){
    tiempo = "buenas noches";
}
else if( hora >= 0 && hora <= 6){
    tiempo = "durmiendo";
}
else{
    tiempo = "valor incorrecto";
}
console.log(tiempo)