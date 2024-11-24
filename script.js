document.addEventListener("DOMContentLoaded", function() {
  // Definir data de início
  const dataInicio = new Date('2024-06-09T00:00:00.000Z');

  // Selecionar elementos
  const dias = document.getElementById('dias');
  const horas = document.getElementById('horas');
  const minutos = document.getElementById('minutos');
  const segundos = document.getElementById('segundos');
  const carregamento = document.querySelector('.carregamento');
  const container = document.querySelector('.container');
  const foto = document.querySelector('.foto-nosso');
  const video = document.getElementById('video');

  // Função para formatar tempo
  function formatarTempo(tempo) {
    return tempo.toString().padStart(2, '0');
  }

  // Função para atualizar contador
  function atualizarContador() {
    const agora = new Date();
    const diferenca = agora.getTime() - dataInicio.getTime();
    const segundosTotal = diferenca / 1000;
    const minutosTotal = segundosTotal / 60;
    const horasTotal = minutosTotal / 60;
    const diasTotal = horasTotal / 24;
    const calculoDias = Math.floor(diasTotal);
    const calculoHoras = Math.floor(horasTotal) % 24;
    const calculoMinutos = Math.floor(minutosTotal) % 60;
    const calculoSegundos = Math.floor(segundosTotal) % 60;
    dias.textContent = formatarTempo(calculoDias);
    horas.textContent = formatarTempo(calculoHoras);
    minutos.textContent = formatarTempo(calculoMinutos);
    segundos.textContent = formatarTempo(calculoSegundos);
  }

  // Função para atualizar barra de carregamento
  function atualizarBarraCarregamento() {
    let progressoValor = 0;
    const intervalo = setInterval(() => {
      progressoValor += 1;
      document.querySelector('.progresso').style.width = progressoValor + '%';
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
    foto.addEventListener("click", function() {
      video.contentWindow.postMessage('{"event":"command","func":"' + (video.paused ? 'play' : 'pause') + '"}', "*");
    });
  }, 5000);
});
