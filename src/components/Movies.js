import react from 'react'
//Here is your key: 709d62e0
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movies =({Title, Poster})=>{
    const poster = Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE  : Poster;
    return(
        <div className="img">
           {Title}

           <img src={poster} />
        </div>
    )
}
export default Movies