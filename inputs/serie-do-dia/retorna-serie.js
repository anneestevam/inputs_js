import retornaDiaSemana from './dia-semana.js';

let listaSerie = ['Smallville', 'Wandavision', 'Loki', 'Wednesday', 'Arrow', 'Flash', 'DC Legends'];

function retornaNomeserie(dia) {
    return listaSerie[dia];
}

function retornaSerieDia() {
    let diaSemana = retornaDiaSemana();
    let serie = retornaNomeserie(diaSemana);

    return serie;
}

export default retornaSerieDia;