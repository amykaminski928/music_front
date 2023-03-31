
// holds main application state. (search function, rendering components: NavBar, SearchBar, DisplayMusic, possibly AddMusicForm)
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import CreateSong from './components/AddMusicForm/AddMusicForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


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
      <div className="container">
        <div className="row">
          <div classname="col-lg-8">
          <SearchBar songData={songData} onSearchChange={handleSearchChange} />
            <DisplayMusic songData={filteredSongData.length ? filteredSongData : songData} />
            <button className='custom-button'onClick={getAllSongs}>Get All Songs</button>
          </div>
          <div classname="col-lg-4">

            <div className="row"> 
              <div className="col-12">
                <CreateSong onAddSong={handleAddSong} />
              </div> 
            </div>
          </div>
          <div className="row"> 
            <div className="col-12">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;   



