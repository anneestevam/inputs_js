import entradaDados from 'readline-sync';

console.log("-----------------------------");
console.log("|         O SOMADOR         |");
console.log("-----------------------------\n");

let n1 = entradaDados.question("Informe o primeiro numero: ");
let n2 = entradaDados.question("Informe o segundo numero: ");

let soma = Number(n1) + Number(n2);

console.log("\nA soma entre "+n1+" + "+n2+" eh igual a: "+soma);

console.log("\nVamos continuar");
let n3 = entradaDados.question("Informe outro numero, agora para fazermos uma subtracao: ");

let sub = soma - n3;

console.log("\nO resultado da subtracao entre "+soma+" e "+n3+" é igual a: "+sub);

console.log("\n------------------------------");
console.log("|      FIM DA APLICACAO      |");
console.log("------------------------------");



