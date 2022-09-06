import entradaDados from 'readline-sync';

console.log("!! CONVERSOR DE TEMPERATURA !!");
console.log("CELSIUS PARA KELVIN");

let c = entradaDados.question("\nInforme a temperatura para fazer a conversao: ");

let k = Number(c) + 273.15;

console.log(c+"ºC equivale a "+k.toFixed(2)+"K");