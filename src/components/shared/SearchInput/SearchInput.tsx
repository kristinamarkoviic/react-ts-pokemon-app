import { FC, useState, ChangeEvent, useEffect } from 'react';

import { IPokemon } from '../interfaces/IPokemon';

import styles from './SearchInput.module.scss';

interface SearchProps {
    searchedPokemons: Array<IPokemon>;
}

const SearchInput = (props: SearchProps) => {

    

    const [ searchedData, setSearchedData ] = useState<Array<IPokemon>>([]);
    const [ searchParams, setSearchParams ] = useState<string>("");

    useEffect(() => {
        //set search data
        if(props.searchedPokemons) setSearchedData(props.searchedPokemons);

        //axios call here 
    });

    //set search parameter

    const inputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams(e.target.value);
    }

    const searchPokemons = () => {
        if(searchedData && searchParams) {
            const filteredPokemons = searchedData.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(searchParams.toLowerCase())
            );

            if(filteredPokemons.length !== 0) {
                setSearchedData(filteredPokemons);
                console.log(filteredPokemons, 'filteredPokemons here')
            }
        }
    }

    return (
        <>
            <label className={styles.labelSearch}>Search
                <input className={styles.search} value={searchParams} onChange={inputChangedHandler} placeholder="Search pokemons" />
            </label>
            <button className={styles.buttonSearch} onClick={searchPokemons}>Search</button>
        </>
    )
}

export default SearchInput;