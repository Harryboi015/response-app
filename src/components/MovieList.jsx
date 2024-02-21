import React from 'react'

function MovieList() {
         const movielist = [
                  {id:0, title: "Dead Pool"},
                  { id:1,     title: "No way Home"},
                  { id:2,      title: "GTA 6 Trailer"},
                  {   id:3,    title: "JAGUN JAGUN"},
                  {   id:4,    title: "Into th bad land"},
                  {   id: 5,   title: "War from  the planet APES"},
         ] 
         
  return (
    <div>
         <ul>
                  {movielist.map((movie, index) =>(
                           <li key={index}>{movie.title}</li>
                  ))}
         </ul>
    </div>
  )
}

export default MovieList;
