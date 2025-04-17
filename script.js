document.addEventListener("DOMContentLoaded", () => {
  const carregamento = document.getElementById('carregamento');
  const container = document.getElementById('container');
  const foto = document.querySelector('.foto');

  setTimeout(() => {
    carregamento.remove();
    container.style.display = 'block';
  }, 5000);

  foto.addEventListener('click', () => {
    alert('Feliz Páscoa meu Amor!');
  });
});