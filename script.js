const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const evento = '31 dec 2023';

function countDown() {
    const dataEvent = new Date(evento);
    const hoje = new Date();

    const segTotal = (dataEvent - hoje) / 1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.textContent = formatoTempo(finalDias);
    hora.textContent = formatoTempo(finalHoras);
    minuto.textContent = formatoTempo(finalMinutos);
    segundo.textContent = formatoTempo(finalSegundos);
}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);
