import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [joke, setJoke] = useState("")

  const fetchData = async () => {
    try {
      const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await res.json();
      // console.log(data);
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const getNewJoke=(e)=>{
    e.preventDefault();
    fetchData();
};

  
  return (
    <div className='container'>
      <h3>Don't laugh challange</h3>
      <div id='joke'>{joke}</div>
      <button id='jokeBtn' className='btn' onClick={getNewJoke}>Get another joke</button>
    </div>
  )
}

export default App