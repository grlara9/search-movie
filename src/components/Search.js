import React, { useState } from 'react'

 const Form = (props) =>{
    const [input, setInput] = useState("");

    const handleInput =(e)=>{
        setInput(e.target.value)
    }
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.search(input)
    }
return(
   <form>
      
       <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter movie"
        />
        <button type="submit" onClick={handleFormSubmit}/>
   </form>
)
}
export default Form