import { FC, useState } from 'react';
import { IPokemon } from '../interfaces/IPokemon';
import styles from './Pokemon.module.scss';
// import { useHistory, generatePath }from "react-router-dom";

interface Pokemon {
    pokemon: IPokemon;
}

const Pokemon: FC<IPokemon> = (props) => {
    // const [id, setId] = useState({
    //     id: props.id
    // });
    // const redirect = useHistory();

    // const handleProceed = () => {
    //     id && redirect.push(generatePath("/pokemon/:id", { id }));
    // };

    // If you have only one root element (here it's article) --> you don't need to wrap everything in fragments
    return (
        <>
            <article className={styles.container}>
                <section className={styles.pokemonCard}>
                    <img className={styles.pokemonImage} src={props.image} alt={props.name} />
                    <p className={styles.pokemonName}>{props.name}</p>
                    <p className={styles.pokemonType}>{props.type}</p>
                   {/* <button onClick={(e) => {
                    setId(props.id)
                   }}>
                        {props.name}
                   </button> */}
                </section>
            </article>
        </>
    )
}

export default Pokemon;