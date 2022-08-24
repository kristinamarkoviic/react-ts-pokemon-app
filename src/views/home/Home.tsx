import {FC, useEffect, useState } from "react";
import axios from 'axios';
import Alert from '@mui/material/Alert';


import styles from './Home.module.scss';

import { pokemonService } from "services/PokemonService";

import { Pokemon } from "components/shared/Pokemon";
import { IPokemon } from "components/shared/interfaces/IPokemon";
import { IPokemonResponse } from "components/shared/interfaces/IPokemonResponse";

import { APP_TITLE, PAGE_TITLE_HOME } from '../../utils/constants';

import { SearchInput } from "components/shared/SearchInput";

const HomePage: FC = (props) => {
    const [pokemons, setPokemons] = useState<Array<IPokemon>>([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const { children } = props;

    /* Zadatak za sutra
        - prebaciti dohvacanje pokemona u zasebnu funkciju → bonus bodovi
        - implementirati search komponentu koja okida request na api (npr po imenu ili broju)
        - prikazuje se pokemon ako postoji, ako ne prikazujemo poruku
    */

    useEffect(() => {
        setIsLoading(true);
        axios.get<IPokemonResponse>('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                console.log(response);
                if (response.data.results.length > 0) {
                    setPokemons(response.data.results);
                    setIsLoading(false);
                }
            })
            .catch(err => { console.error(err) });

        /* if(pokemonData) {
            //setPokemons(pokemonData.results)
        } */
        //console.log(pokemonData);
        // setPokemons(pokemonData);
    }, [])

    //[] dependency array  []

    // const pokemons = pokemonService.getAllPokemons();
    // console.log(pokemons, 'pokemons')

    const renderLoader = isLoading && <span>Loading</span>

    const renderError = hasError && !isLoading && <Alert severity="error">There has been an error while fetching Pokemon. Please try again</Alert>;

    const renderSearch = pokemons.length > 0 && 
    <SearchInput searchedPokemons={pokemons}></SearchInput>

    const renderPokemon = pokemons.length > 0 && 
        pokemons.map((pokemon, index) => (
            <article key={index}>{pokemon.name}</article>
        ))

    return (
        <>
            <div className={styles.page}>
                <h1>
                    {PAGE_TITLE_HOME} | {APP_TITLE}
                </h1>

                {renderLoader}
                {renderError}
                
                {renderSearch}
                <div className={styles.pokemonsList}>
                    { renderPokemon}
                    {/* {pokemons.map((pokemon: IPokemon) => (
                        <Pokemon pokemon=pokemon></Pokemon>
                    ))} */}
                </div>
            </div>
            
        </>
    )
}

export default HomePage;
