import calcJuros from 'readline-sync';

let juros;

let divida = calcJuros.question("Informe o valor devido: R$");

    if(divida > 0){
        let diasAtraso = calcJuros.question("Informe os dias em atraso: ");

        if(diasAtraso > 0){
            if(diasAtraso < 15){
                juros = 5;
            }
            else{
                juros = 10;
            }
           
            let valorJuros = (divida / 100) * juros;
            let totalDivida = Number(divida) + Number(valorJuros);

            console.log("\nValor inicial da divida: R$"+divida);
            console.log("Dias atrasados: "+diasAtraso);
            console.log("Taxa de juros: "+juros+"%");
            console.log("Valor total com juros: R$"+totalDivida);
        }

        else{
            console.log("Você está em dia!");
        }

    }
    else{
        console.log("O valor da dívida deve ser maior que zero.");
    }

console.log("\nAplicacao Encerrada!");
