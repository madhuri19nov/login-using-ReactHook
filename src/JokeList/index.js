import React, { useState, useEffect } from 'react';
import './index.css'

const JokeList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
        if (!response.ok) {
          throw new Error('Failed to fetch jokes');
        }
        const data = await response.json([]);
        setJokes(data.jokes);
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className='joke-list'>
      <h2>Jokes</h2>
        <table>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JokeList;
