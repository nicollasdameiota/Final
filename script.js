// Definir data de início
const dataInicio = new Date('2024-06-09T00:00:00.000Z');

// Selecionar elementos
const contador = document.querySelector('.contador');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const coracoes = document.querySelector('.coracoes');
const carregamento = document.querySelector('.carregamento');
const container = document.querySelector('.container');
const progresso = document.querySelector('.progresso');

// Função para atualizar contador
function atualizarContador() {
  const agora = new Date();
  const diferenca = (agora.getTime() - dataInicio.getTime()) / 1000;
  const calculoDias = Math.floor(diferenca / 86400);
  const calculoHoras = Math.floor((diferenca % 86400) / 3600);
  const calculoMinutos = Math.floor((diferenca % 3600) / 60);
  const calculoSegundos = Math.floor(diferenca % 60);

  dias.textContent = calculoDias;
  horas.textContent = calculoHoras.toString().padStart(2, '0');
  minutos.textContent = calculoMinutos.toString().padStart(2, '0');
  segundos.textContent = calculoSegundos.toString().padStart(2, '0');
}

// Função para criar coração
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao-animado');
  coracao.textContent = '';
  coracoes.appendChild(coracao);
  coracao.style.left = Math.random() * 100 + '%';
  coracao.style.top = Math.random() * 100 + '%';
  setTimeout(() => {
    coracao.remove();
  }, 3000);
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

// Iniciar contador e criar corações
atualizarContador();
setInterval(atualizarContador, 1000);
setInterval(criarCoracao, 500);

// Iniciar barra de carregamento
atualizarBarraCarregamento();

// Exibir conteúdo após carregamento
setTimeout(() => {
  carregamento.style.display = 'none';
  container.style.display = 'block';
}, 5000);

// Função para tocar áudio
function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}