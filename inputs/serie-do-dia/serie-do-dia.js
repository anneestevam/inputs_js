import retornaSerieDia from './retorno-serie.js';

let data = new Date();
let diaSemana = data.getDay();

let serieDoDia = retornaSerieDia(diaSemana);

console.log('Série do dia: ' + serieDoDia);