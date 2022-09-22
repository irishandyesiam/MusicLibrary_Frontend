import React, { useState } from 'react';
import './CreateSong.css';

const CreateSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: artist,
            release_date: release_date,
            genre: genre,
        };
        console.log(newEntry)
        props.createSongSubmit(newEntry)
    }


    return ( 
        <div>
            <h1 className='add-a-song'>Add A Song</h1>
        <form className='createsong' onSubmit={handleSubmit}>
            
            <input type='text' value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
            
            <input type='text' value={artist} placeholder="Artist" onChange={(event) => setArtist(event.target.value)}/>
            
            <input type='text' value={album} placeholder="Album" onChange={(event) => setAlbum(event.target.value)}/>
            
            <input type='date' value={release_date} placeholder="Release Date" onChange={(event) => setDate(event.target.value)}/>
            
            <input type='text' value={genre} placeholder="Genre" onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
        </div>
     );
}
 
export default CreateSong;