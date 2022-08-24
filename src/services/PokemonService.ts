import axios from 'axios';
// import { IPokemon } from "components/shared/interfaces/IPokemon";
import { IPokemonResponse } from "components/shared/interfaces/IPokemonResponse";

//const axios  = require('axios');

class PokemonService {
    //get all 

    async getAllPokemons() {
        /* const response = await Promise.resolve(axios.get('https://pokeapi.co/api/v2/pokemon')).then((resp) => {
            return resp.data.results
        });
        
        return response */
        try {
            const pokemonData = await axios.get<IPokemonResponse>('https://pokeapi.co/api/v2/pokemon');

            return pokemonData;
        } catch (err) {
            console.error(err);
        }
    }

    
    
    //get by id
    
}


/* const getAllPokemon = async (): Promise<IPokemonResponse | undefined> => {
    try {
        const pokemonData: IPokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');
        return pokemonData;
    } catch (err) {
        console.error(err);
        return undefined;
    }
}; */

const getAllPokemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon').then(response => response).catch(err => { console.error(err) });
}

// jos funkcija

const pokemonService = {
    get: getAllPokemon,
}

//export const pokemonService = new PokemonService();
export {pokemonService };