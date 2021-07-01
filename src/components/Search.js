import React, { useState } from 'react'
import Header from './Header'
import './Search.css'
 const Search = (props) =>{
    const [searchValue, setSearchValue] = useState("");

    const handleInput =(e)=>{
        setSearchValue(e.target.value)
    }
    console.log(searchValue)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.search(searchValue)
    }
return(

    
   <form>
      
       <input
        type="text"
        value={searchValue}
        onChange={handleInput}
        placeholder="Enter movie"
        />
        <button type="submit"onClick={handleFormSubmit}>SEARCH</button>
   </form>
  
) 
}
export default Search