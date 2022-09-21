import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={release_date} onChange={(event) => setDate(event.target.value)}/>
            <label>Genre</label>
            <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default CreateSong;