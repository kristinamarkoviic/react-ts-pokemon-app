import {FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SinglePokemon.module.scss';
import PokemonContext, { usePokemonContext } from 'context/PokemonContext';
import { Pokemon } from 'components/shared/Pokemon';


const SinglePokemonPage: FC  = (props)=> {
    const [ message, setMessage ] = useState('');
    const { id } = useParams();

    const context = usePokemonContext();

    

    useEffect(() => {
        // Can we write this a bit cleaner?
        // Also, returns are not needed when calling hooks :p
        if(id) {
            return setMessage('Hi, Im pokemon' + id);
        }
        return setMessage('No pokemon here');
    }, [])

    console.log(PokemonContext, 'value POkemon context')


    return (
        <div className={styles.page}>
            <p>Single Pokemon Page</p>
            {/* <PokemonContext.Consumer>{(value)=> {
                if(value !== null) { 
                    return <Pokemon pokemon={value}></Pokemon> 
                }
            }}</PokemonContext.Consumer> */}
            {/* <Pokemon pokemon={value} /> */}
            <p>{ message }</p>
        </div>
    )
}

export default SinglePokemonPage;