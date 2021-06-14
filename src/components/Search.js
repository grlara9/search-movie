import React, { useState } from 'react'

 const Form = () =>{
    const [input, setInput] = useState("");

    const handleInput =(e)=>{
        setInput(e.target.value)
    }
    console.log(input)
return(
   <form>
      
       <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Enter movie"
        />
   </form>
)
}
export default Form