import React from 'react'

function Mere() {
         const Mere = [
                  {id:0, name: "Into the bad lands"},
                  {id:1, name: "mere the boss"},
                  {id:2, name: "big brother Mere"},
                  {id:3, name: "the journey to heaven"},
                  {id:4, name: "Who wants to be a millonaire"},
                  {id:5, name: "Love see what you made me Do"},
                  {id:6, name: " power "}
       ]
  return (
    <div className="box4">
      <ul>
         {Mere.map((movie, index) =>(
                  <li key={index}>{movie.id}{movie.name}</li>
         ))}
      </ul>
    </div>
  )
}

export default Mere
