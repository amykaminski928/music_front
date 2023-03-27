import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

   useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongs(response.data)
  }
  return (
    <div className="App">
      <button onClick={() => getAllSongs}>Get All Songs</button>

    </div>
  );
}

export default App;
