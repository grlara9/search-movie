import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Search from './components/Search'


function App() {
  const MOVIE_URl = "https://www.omdbapi.com/?s=man&apikey=709d62e0";

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(MOVIE_URl)
    .then(res => {
      console.log("this is res" , res)
    })
    .catch(err =>{
      console.log("Error: ", err)
    })
  })

  const search = input =>{
    axios.get(`https://www.omdbapi.com/?s=${input}&apikey=709d62e0`)
    .then(res=>{
      console.log('this is user:', res)
    })

  }

  return (
    <div className="App">
     <Search search={search} />
    </div>
  );
}

export default App;
