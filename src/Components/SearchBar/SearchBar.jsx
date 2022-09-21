// create a form with one input. this is where the user will type a search term that they would like to filter the table by. //
// once the form is submitted the value the user entered should be passed to a function on the App.jsx component that then //
// filters the songs by the term depending on if that term mataches any of the song's properties.//
import React from 'react';

// const SearchBar = (props) => {

//     console.log(props.songs)
//     return (  
    
//         const [title, setTitle] = useState('')
//         const [artist, setArtist] = useState('')
//         const [album, setAlbum] = useState('')
//         const [release_date, setDate] = useState('')
//         const [genre, setGenre] = useState('')

//         function handleSubmit(event) {
//             event.preventDefault();
//             let newSearch = {
//                 title: title;
//             }
//         }

//         {props.songs.includes(() => 
//             return(
//                 <form action="/action_page.php" onSubmit={handleSubmit}>
//                     <label for="entry">Choose a category to filter by:</label>
//                     <select id="entry" name="entry">
//                         <option value="all">all</option>
//                         <option value="title">title</option>
//                         <option value="artist" selected>artist</option>
//                         <option value="album">album</option>
//                         <option value="release_date">release date</option>
//                         <option value="genre">genre</option>
//                     </select>
//                     <input type="submit">
//                 </form>
//             );
            
//         )});
//     }
 
// export default SearchBar;