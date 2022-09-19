const dataUltimoAcesso = new Date('2021/05/11 13:42:11');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;
const milissegundosSemana = milissegundosDia * 7;

let msg = "";

if ( hora < 6 || hora >= 18 ) {
  msg = 'Boa noite\n';
} else if (hora >= 6  && hora < 12 ) {
  msg = 'Bom dia\n';
} else {
  msg = 'Boa tarde\n';
}

if ( diferencaTime > milissegundosSemana ) {
  msg += "Você está ausente há semanas!!";
} else if (diferencaTime > milissegundosHora) {
  msg += "Você está ausente há horas!!!";
} else if (diferencaTime > milissegundosDia) {
  msg += "Voê está ausente há dias!!"
} else {
  msg += "Que bom que ainda está aqui!";
}

console.log(msg);