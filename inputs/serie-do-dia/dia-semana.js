export default function retornaDiaSemana() {
    let data = new Date();
    let dia = data.getDay();

    return dia;
}