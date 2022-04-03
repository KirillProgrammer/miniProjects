const jokeEl = document.getElementById('joke'),
      jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
  let data = await fetch('https://api.chucknorris.io/jokes/random', {
    headers: {
      Accept: 'application/json'
    }
  }).then(res => res.json())
    .then(data => data.value);
    jokeEl.innerText = data;
}

jokeBtn.addEventListener('click', () => {
  generateJoke();
});