import React, { useState } from 'react'

 const Form = () =>{
    const [input, setInput] = useState("");

    const handleInput =(e)=>{
        setInput(e.target.value)
    }
    console.log(input)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        Props.search(input)
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