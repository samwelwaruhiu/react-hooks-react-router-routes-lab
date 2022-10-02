import React from "react";
import { movies } from "../data";

function Movies() { 
  
  const allmovies = movies.map((movie)=>{
    const movielist = movie.genres.map((mv)=>{
      return <li key={mv}>{mv}</li>
    })
  
     return (
     <div key={movie.title}>
      
       <p >{movie.title}</p>
       <p>{movie.time}</p>
       <ul>
       {movielist}
     </ul>
   </div>)
  })
  return <div>
    <h1>Movies Page</h1>
  {allmovies}
  </div>;
}

export default Movies;