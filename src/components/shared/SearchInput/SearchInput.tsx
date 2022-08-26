import { FC, useState, ChangeEvent, useEffect, useContext } from 'react';

import { IPokemon } from '../interfaces/IPokemon';
import { ISinglePokemonResponse } from '../interfaces/ISinglePokemonResponse';

import { pokemonService } from 'services/PokemonService';
import { PokemonContext } from 'context';

import styles from './SearchInput.module.scss';
import { Pokemon } from '../Pokemon';
import { TeamContext } from "context/TeamContext";


const SearchInput: FC = (props) => {
    const context = useContext(TeamContext);
    const { team } = context;

    const [ searchParams, setSearchParams ] = useState<string>("");

    const {children} = props;

    const [pokemon, setPokemon] = useState<ISinglePokemonResponse | null>(null);

    //set search parameter
    const inputChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams(e.target.value);
    }

    const handleSearch = async (id: number) => {
        if(!id) return;

        const fetchedPokemon = await pokemonService.getById(id);
        setPokemon(fetchedPokemon);
        setSearchParams("");
    }

    const renderPokemon = pokemon && <Pokemon pokemon={pokemon} />

    const renderContext = pokemon && <PokemonContext.Provider value={pokemon}> {children}  </PokemonContext.Provider>;

    const renderTeam = team.length > 0 && team.map(teamMember => <Pokemon teamDisplay={true} pokemon={teamMember} />);

    //FORM tag here and try button submit here
    return (
        <> 
            <label className={styles.labelSearch}>Search
                <input className={styles.search} value={searchParams} onChange={inputChangedHandler} placeholder="Search pokemons" />
            </label>
            <button className={styles.buttonSearch} onClick={() => handleSearch(+searchParams)}>Search</button>
            {renderPokemon}
            {renderContext}
            <hr />
            {renderTeam}
        </>
    )
}

export default SearchInput;