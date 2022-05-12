import React from 'react'


let pokemons=[]

fetch("https://pokeapi.co/api/v2/pokemon/?limit=25")
.then(response => response.json())
.then (data =>
  {pokemons = data.results
  console.log(pokemons)}
  )


const App = () => {
   
  return (
    <div >
       <h3>Poke App</h3>
       <select>
         <option>Picachu</option>
         <option>Bulbasaur</option>
         <option>Charmander</option>
       </select>
    </div>
  )
}

export default App
