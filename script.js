// Definir data de início
const dataInicio = new Date('2024-06-09T00:00:00.000Z');

// Selecionar elementos
const anos = document.getElementById('anos');
const meses = document.getElementById('meses');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const carregamento = document.querySelector('.carregamento');
const container = document.querySelector('.container');
const progresso = document.querySelector('.progresso');

// Função para atualizar contador
function atualizarContador() {
const agora = new Date();
const diferenca = agora.getTime() - dataInicio.getTime();

const segundosTotal = diferenca / 1000;
const minutosTotal = segundosTotal / 60;
const horasTotal = minutosTotal / 60;
const diasTotal = horasTotal / 24;
const mesesTotal = diasTotal / 30;
const anosTotal = mesesTotal / 12;

const calculoAnos = Math.floor(anosTotal);
const calculoMeses = Math.floor(mesesTotal) % 12;
const calculoDias = Math.floor(diasTotal) % 30;
const calculoHoras = Math.floor(horasTotal) % 24;
const calculoMinutos = Math.floor(minutosTotal) % 60;
const calculoSegundos = Math.floor(segundosTotal) % 60;

anos.textContent = calculoAnos.toString().padStart(2, '0');
meses.textContent = calculoMeses.toString().padStart(2, '0');
dias.textContent = calculoDias.toString().padStart(2, '0');
horas.textContent = calculoHoras.toString().padStart(2, '0');
minutos.textContent = calculoMinutos.toString().padStart(2, '0');
segundos.textContent = calculoSegundos.toString().padStart(2, '0');
}

// Função para atualizar barra de carregamento
function atualizarBarraCarregamento() {
let progressoValor = 0;
const intervalo = setInterval(() => {
progressoValor += 1;
progresso.style.width = progressoValor + '%';
if (progressoValor >= 100) {
clearInterval(intervalo);
}
}, 50);
}

// Iniciar contador
atualizarContador();
setInterval(atualizarContador, 1000);

// Iniciar barra de carregamento
atualizarBarraCarregamento();

// Exibir conteúdo após carregamento
setTimeout(() => {
carregamento.style.display = 'none';
container.style.display = 'block';
}, 5000);
