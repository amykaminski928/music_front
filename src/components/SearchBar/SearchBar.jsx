// two dropdown menus one for search by element and one that searches by that elements available values (will use callback function as a prop to handle search changes)
import React, {useState, useEffect} from 'react';
import './SearchBar.css'

const SearchBar = ({ songData, onSearchChange }) => {
    const [searchElement, setSearchElement] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const [searchOptions, setSearchOptions] = useState([]);

    useEffect(() => {
        if (searchElement) {
            const uniqueValues = [
                ...new Set(songData.map((item) => item[searchElement])),
            ];
            setSearchOptions(uniqueValues);
        } else {
            setSearchOptions([]);
        }
    }, [searchElement, songData]);

    const handleElementChange = (e) => {
        setSearchElement(e.target.value);
        onSearchChange(e.target.value, searchElement);
    };

    const handleValueChange = (e) => {
        setSearchValue(e.target.value);
        onSearchChange(searchElement, e.target.value);
    };

    return (
        <div >
            <select className="menu-style" value={searchElement} onChange={handleElementChange}>
                <option value="">Select element</option>
                <option value="title">Title</option>
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="release_date">Release Date</option>
                <option value="genre">Genre</option>                
            </select>
            <select className="menu-style" value={searchValue} onChange={handleValueChange}>
                <option value="">Select value</option>
                {searchOptions.map((option, index) => (
                    <option key={index} value={option}>{option}                        
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchBar