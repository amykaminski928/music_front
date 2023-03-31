// render table to display songs and their data
import React from 'react';
import "./DisplayMusic.css";

const DisplayMusic = ({songData}) => {
  return (
    <table className="table table-striped table-hover fun-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {songData.map((item, index) => (
          <tr key ={index}>
            <td>{item.title}</td>
            <td>{item.artist}</td>
            <td>{item.album}</td>
            <td>{item.release_date}</td>
            <td>{item.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
    


export default DisplayMusic;   



