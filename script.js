document.addEventListener("DOMContentLoaded", () => {
  const carregamento = document.querySelector('.carregamento');
  const container = document.querySelector('.container');
  const foto = document.querySelector('.foto');

  setTimeout(() => {
    carregamento.style.display = 'none';
    container.style.display = 'block';
  }, 5000);

  foto.addEventListener('click', () => {
    alert('Feliz Páscoa meu Amor!');
  });
});