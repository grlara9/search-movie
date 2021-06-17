import React, { useState } from 'react'

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
        <button type="submit" onClick={handleFormSubmit} value="SEARCH"/>
   </form>
)
}
export default Search