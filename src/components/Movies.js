import react from 'react'
//Here is your key: 709d62e0
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movies =({Title})=>{
    //const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE  : movie.Poster;
    return(
        <div className="img">
           {Title}
        </div>
    )
}
export default Movies