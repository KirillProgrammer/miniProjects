const btn = document.querySelector('.btn'),
      search = document.querySelector('.search'),
      input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});