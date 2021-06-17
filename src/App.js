import React, { useEffect, useReducer} from 'react'
import { initialState, reducer } from './hooks/reducer'
import axios from 'axios'
import './App.css';
import Search from './components/Search'

const MOVIE_URl = "https://www.omdbapi.com/?s=man&apikey=709d62e0";



const App =()=> {

 const [state, dispatch] = useReducer(reducer, initialState)
 

  useEffect(()=>{
    axios.get(MOVIE_URl)
    .then(response => {
     dispatch({
       type:"SEARCH_MOVIES_SUCCESS",
       payload: response
      })
    })
    .catch(err =>{
      console.log("Error: ", err)
    })
    
  },[])

  const search = input =>{
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=709d62e0`)
    .then(response=>{
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: response
      })
    })

  }
  
                
  return (
    <div className="App">
     <Search search={search} />
    </div>
  );
}

export default App;
