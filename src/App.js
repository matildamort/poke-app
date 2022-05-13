import React, {Component} from 'react'
// get an array of pokemons ad objects
import pokemons from './data/pokemons.json' 

// creation of athe App class component, inheriting from React.component
class App extends Component{
    // first phase of mounting, initialise state, super() inherits eveything we get from the component. 
    constructor(){
        super()
        // initialising state, it is an object inherited from component
        this.state = {
            name: "pikachu",
            pokeImg: null

        }
    }

    getPokemon(name){
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                pokeImg:data.sprites.other["official-artwork"].front_default
                
            })
            console.log()
        })
    }

    
    // changeValue(e) {
    //     //this.state.name = e.target.value
    //     // this.setState({
    //     //     name: e.target.value

    //     // })
    //     //this.getPokemon(this.state.name) one behind
    //     this.getPokemon(e.target.value)

    //   }


    componentDidMount(){
        this.getPokemon(this.state.name)
    }

    // The ssecond step in the mounting proceess, returns a compnent that is rendered ion the browser. 
    // A select list with the names gotten from pokemon.jsopn
    // paragraph with the calue of state.name 
    // image with the url taken from the API stored in state.pokeImg
    render(){
        console.log("I am rendering")
        return(
            <div>
                <h3>Poke App</h3>
                <p>I have {pokemons.length} pokemons</p>
                <select value={this.state.name} onChange={(e)=>this.getPokemon(e.target.value)}>
                    {pokemons.map(poke => 
                        <option key={poke.id} value={poke.name}>{poke.name}</option>
                    )}
                </select>
                <p>{this.state.name} I choose you!</p>
                <img src={this.state.pokeImg} alt={this.state.name} />        
            </div>
        )
    }
}

export default App