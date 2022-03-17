//let autos = new Array('BMW','Mercedez benz','volvo');
const autos =['BMW','Mercedez benz','volvo'];
console.log(autos)

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i]);
}
console.log(autos[3])

autos[1] = 'mercedesbenz';
console.log(autos[1]);

autos.push('audi');
console.log(autos)

console.log(autos.length);
autos[autos.length] = 'cadillac'

console.log(autos)


