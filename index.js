const dias = document.getElementById('dia');
const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');
const lancamento = "01 dec 2023";

function countDown(){
    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    let segTotal = (dataLanc - hoje) / 1000;
    let finalDias = formatoTempo(Math.floor(segTotal / 60 / 60 / 24) + 'D');
    let finalHoras = formatoTempo(Math.floor(segTotal / 60 / 60) % 24 + 'H');
    let finalMinutos = formatoTempo(Math.floor(segTotal / 60) % 60 + 'M');
    let finalSegundos = formatoTempo(Math.floor(segTotal) % 60 + 'S');

    dias.innerHTML = finalDias;
    horas.innerHTML = finalHoras;
    minutos.innerHTML = finalMinutos;
    segundos.innerHTML = finalSegundos;
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);