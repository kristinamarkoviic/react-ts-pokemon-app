import {FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SinglePokemon.module.scss';

export interface ISinglePokemonProps {};

const SinglePokemonPage: FC<ISinglePokemonProps> = props => {
    const [ message, setMessage ] = useState('');
    const { id } = useParams();

    useEffect(() => {
        // Can we write this a bit cleaner?
        // Also, returns are not needed when calling hooks :p
        if(id) {
            return setMessage('Hi, Im pokemon' + id);
        }
        return setMessage('No pokemon here');
    }, [])

    return (
        <div className={styles.page}>
            <p>Single Pokemon Page</p>
            <p>{ message }</p>
        </div>
    )
}

export default SinglePokemonPage;