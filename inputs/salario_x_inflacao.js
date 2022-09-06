let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

import entradaDados from 'readline-sync';

console.log("Escolha uma das alternativas: ");

console.log("\n");
console.log("1 - Listar os salarios minimos de 2010 a 2020");
console.log("2 - Listar o indice IPCA de 2010 a 2020");
console.log("3 - Comparacao entre o percentual de aumento salarial e o IPCA")
console.log ("\n");

let opcao = entradaDados.question("Digite o numero da sua escolha: ")
console.log ("\n");

if (opcao == 1) {
    for (let i = 0; i < salarioMinimo.length; i++)
    {
        let label_ano = "Ano:";
        let label_salario = "Salario minimo:"
        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;

        console.log(label_ano.padEnd(30, '.') + ano);
        console.log(label_salario.padEnd(30, '.') + "R$ " + salario.toFixed(2).replace(".", ","));
        console.log("\n")
    }
} else if (opcao == 2) {
    let i = 0;

    while (i < inflacao.length)
    {   
        let label_ano = "Ano:";
        let label_ipca = "Inflacao IPCA:"
        let ano = inflacao[i].ano;
        let ipca = inflacao[i].ipca;

        console.log(label_ano.padEnd(30, '.') + ano);
        console.log(label_ipca.padEnd(30, '.') + ipca.toFixed(2).replace(".", ",") + "%");
        console.log("\n");
        i++;
    }
} else if (opcao == 3) {
    let i = 0;
    let c = 0;

    while (i < salarioMinimo.length && c < inflacao.length)
    {   
        let label_ano = "Ano:";
        let label_salario = "Salario:";
        let label_crescimentoSalarial = "Crescimento salarial:";
        let label_inflacao = "Inflacao IPCA:"

        let ano = salarioMinimo[i].ano;
        let salario = salarioMinimo[i].salario;
        let ipca = inflacao[c].ipca;
        let anterior = (i > 0) ? salarioMinimo[i-1].salario : 0;   // professor ajudou
        let diferenca = salario - anterior;
        let crescimento = (ano == 2010) ? 0 : (diferenca / anterior) * 100;

        console.log(label_ano.padEnd(30, '.') + ano);
        console.log(label_salario.padEnd(30, '.') + "R$ " + salario.toFixed(2).replace(".", ","));
        console.log(label_crescimentoSalarial.padEnd(30, '.') + crescimento.toFixed(2).replace(".", ",") + "%");
        console.log(label_inflacao.padEnd(30, '.') + ipca.toFixed(2).replace(".", ",") + "%");
        console.log("\n");
        i++; c++;
    }
} else {
    console.log("Opcao invalida!");
}