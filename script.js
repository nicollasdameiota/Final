document.addEventListener("DOMContentLoaded", () => {
  const carregamento = document.getElementById('carregamento');
  const container = document.getElementById('container');
  const foto = document.querySelector('.foto');

  foto.addEventListener('click', () => {
    alert('Feliz Páscoa meu Amor!');
  });

  window.addEventListener('load', () => {
    carregamento.style.display = 'none';
    container.style.display = 'block';
  });
});