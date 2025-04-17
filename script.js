document.addEventListener("DOMContentLoaded", () => {
  const carregamento = document.querySelector('.carregamento');
  const container = document.querySelector('.container');
  const foto = document.querySelector('.foto');

  window.addEventListener('load', () => {
    setTimeout(() => {
      carregamento.style.display = 'none';
      container.style.display = 'block';
    }, 1000);
  });

  foto.addEventListener('click', () => {
    alert('Feliz Páscoa meu Amor!');
  });
});