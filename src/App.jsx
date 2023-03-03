import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Joke from './Components/Joke';

export default function App() {
  const [jokes, setJokes] = useState(null);
  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setJokes(result.jokes);
        },
        (error) => { }
      );
  }, []);

  const sort = () => {
    setJokes(u => [...u].sort((a, b) => a.jokes.localeCompare(b.jokes)));
  }

  return (
    <div className="App">
      <header className="App-header ">
        <ul>
          {jokes?.map((item) => (
            <Joke key={item.id} joke={item} />
          ))}
        </ul>

        <button className="btn btn-outline-primary m-4" onClick={sort}>Joke</button>

      </header>

    </div>
  );
}