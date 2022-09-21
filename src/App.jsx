import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSong from './Components/CreateSong/CreateSong'

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data)
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
    <div>
      <h1>Music Library</h1>
      <DisplayMusic songs={songs}/>
      <CreateSong createSongSubmit={createSong}/>
    </div>

  );
}

export default App;
