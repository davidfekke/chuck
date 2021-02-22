import axios from 'axios';

async function getJoke() {
    const joke = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(joke.data.value);
}
getJoke();
