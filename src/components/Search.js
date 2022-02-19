import React, { useState } from 'react'
import Header from './Header'
import './Search.css'

 const Search = (props) =>{
    const [searchValue, setSearchValue] = useState('');


    const handleFormSubmit = e => {
        e.preventDefault();
        props.search(searchValue)
    }

return(
    <form>
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Enter movie"
        />
        <button type="submit"onClick={handleFormSubmit}>SEARCH</button>
   </form>
  ) 
}
export default Search