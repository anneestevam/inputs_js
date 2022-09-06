import entradaDados from 'readline-sync';

console.log("-------------------------------------------");
console.log("=-=-=-=-= CONVERSOR DE MI PARA KM =-=-=-=-=");
console.log("-------------------------------------------");

let mi = entradaDados.question("Informe o valor em Milhas: ");

let km = mi / 0.62;

console.log(mi+"mi equivale a "+km.toFixed(2)+"km");

