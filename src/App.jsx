import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data);
    }

  function getFilteredSong(filterSong){
    let response = songs.filter(function(element){
      if (element.title.includes(filterSong))
        {return true}
      if (element.artist.includes(filterSong))
        {return true}
      if (element.album.includes(filterSong))
        {return true}
      if (element.release_date.includes(filterSong))
        {return true}
      if (element.genre.includes(filterSong))
        {return true}
      else 
        {return false}
    });
    setSongs(response)
  }
    

  // useEffect(() => {
  //   postSong();
  // })

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
      if(response.status === 201){
        await getAllSongs();
        console.log(newSong)
      }
  }

  // function createSong(new_song){
  //   let newSong = [...songs, new_song];
  //   setSongs(newSong)
  // }

  return (
    <div className='container'>
      <h1 className='header'>Music Library</h1>
      <SearchBar submittedSearchTerm={getFilteredSong}/>
      <DisplayMusic songs={songs}/>
      <CreateSong createSongSubmit={createSong}/>
    </div>
  );
}

export default App;
