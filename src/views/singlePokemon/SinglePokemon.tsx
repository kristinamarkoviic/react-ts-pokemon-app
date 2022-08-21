import {FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface ISinglePokemonProps {};

const SinglePokemonPage: FC<ISinglePokemonProps> = props => {
    const [ message, setMessage ] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            return setMessage('Hi, Im pokemon' + id);
        }
        return setMessage('No pokemon here');
    }, [])

    return (
        <div>
            <p>Single Pokemon Page</p>
            <p>{ message }</p>
        </div>
    )
}

export default SinglePokemonPage;