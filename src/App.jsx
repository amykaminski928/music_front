
// holds main application state. (search function, rendering components: NavBar, SearchBar, DisplayMusic, possibly AddMusicForm)
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import CreateSong from './components/AddMusicForm/AddMusicForm';

const App = () =>  {

    const [songData, setSongData] = useState([]);
    const [filteredSongData, setFilteredSongData] = useState([]);

    useEffect(() => {
    getAllSongs();
    }, []);

    async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    console.log(response.data);
    setSongData(response.data)
    }
    const handleSearchChange = (element, value) => {
      if (element && value) {
        const filteredData = songData.filter(
          (item) => item[element] && item[element] === value
          );
          setFilteredSongData(filteredData);
        } else {
          setFilteredSongData([]);
        }
    };

    async function handleAddSong(newSong) {
      const response = await axios.post('http://127.0.0.1:8000/music/', newSong);
      if (response.status === 201) {
        getAllSongs();
      }
    }

    return (
    <div>
      <NavBar />
      <DisplayMusic songData={filteredSongData.length ? filteredSongData : songData} />
      <button onClick={getAllSongs}>Get All Songs</button>
    
      <SearchBar songData={songData} onSearchChange={handleSearchChange} />
      <CreateSong onAddSong={handleAddSong} />
      </div>
    );
};

export default App;   



