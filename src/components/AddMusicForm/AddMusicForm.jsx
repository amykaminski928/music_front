// Add new music to th api (use callback funstion as a prop to handle the form submission)

import React, { useState } from 'react';
import '../../App.css'

const CreateSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong ={
            title: (title),
            artist: (artist),
            album: (album),
            release_date: (releaseDate),
            genre: (genre)
        };
        props.onAddSong(newSong);
        setTitle('');
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');
        
    }
    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group'>
                <label>Title</label>
                <input type = 'text' className="form-control" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Artist:</label>
                <input type= 'text' className="form-control" value={artist} onChange={(event) => setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album:</label>
                <input type= 'text' className="form-control" value={album} onChange={(event) => setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Release Date:</label>
                <input type= 'text' className="form-control" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre:</label>
                <input type= 'text' className="form-control" value={genre} onChange={(event) => setGenre(event.target.value)}/>
            </div>
            <button type= 'submit' className="custom-button" style={{'margin-top': '1em'}}>ADD SONG</button>
        </form>
     );
};
 
export default CreateSong;