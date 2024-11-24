document.addEventListener("DOMContentLoaded", () => {
  const dataInicio = new Date('2024-06-09T00:00:00.000Z');
  const dias = document.getElementById('dias');
  const horas = document.getElementById('horas');
  const minutos = document.getElementById('minutos');
  const segundos = document.getElementById('segundos');
  const carregamento = document.querySelector('.carregamento');
  const container = document.querySelector('.container');
  const progresso = document.querySelector('.progresso');

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

  function atualizarBarraCarregamento() {
    let progressoValor = 0;
    const intervalo = setInterval(() => {
      progressoValor += 1;
      progresso.style.width = `${progressoValor}%`;
      if (progressoValor >= 100) clearInterval(intervalo);
    }, 50);
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
  atualizarBarraCarregamento();

  setTimeout(() => {
    carregamento.style.display = 'none';
    container.style.display = 'block';
  }, 5000);
});
