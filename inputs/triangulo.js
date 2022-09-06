import entradaDados from 'readline-sync';

console.log("Area do Triangulo\n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ")

let area = (base * altura) / 2;

console.log("\nA area do triangulo é: "+area)