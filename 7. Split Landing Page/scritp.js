const left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.toggle('hover-left'));
left.addEventListener('mouseleave', () => container.classList.toggle('hover-left'));
right.addEventListener('mouseenter', () => container.classList.toggle('hover-right'));
right.addEventListener('mouseleave', () => container.classList.toggle('hover-right'));