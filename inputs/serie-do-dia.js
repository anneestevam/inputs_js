let serie = ['Smallville', 'Wandavision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaSerieDia(indexSerie) {
    return serie[indexSerie];
}

let data = new Date();
let diaSemana = data.getDay();

let serieDoDia = retornaSerieDia(diaSemana);

console.log('Série do dia: ' + serieDoDia);