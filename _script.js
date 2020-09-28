const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function lampEstaQuebrada() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampLigar() {
    if (!lampEstaQuebrada()) {
        lamp.src = './_imagens/lampada-acesa.jpg';
    }
}

function lampDesligar() {
    if (!lampEstaQuebrada()) {
        lamp.src = './_imagens/lampada-apagada.jpg';
    }
}

function lampQuebrada() {
    lamp.src = './_imagens/lampada-quebrada.jpg';
}

ligar.addEventListener('click', lampLigar);
desligar.addEventListener('click', lampDesligar);
lamp.addEventListener('mouseover', lampLigar)
lamp.addEventListener('mouseleave', lampDesligar)
lamp.addEventListener('dblclick', lampQuebrada);

