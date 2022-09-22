// create a form with one input. this is where the user will type a search term that they would like to filter the table by. //
// once the form is submitted the value the user entered should be passed to a function on the App.jsx component that then //
// filters the songs by the term depending on if that term mataches any of the song's properties.//
import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    console.log(props.songs)

    const [search_term, setSearchTerm] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search_term)
        props.submittedSearchTerm(search_term)
    };

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <input type='text' value={search_term} placeholder="...title" onChange={(event) => setSearchTerm(event.target.value)}/>
            <input type='submit' value="Search"/>
        </form>
    );
}
 
export default SearchBar;