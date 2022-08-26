import { useContext } from 'react';
import { ISinglePokemonResponse } from '../interfaces/ISinglePokemonResponse';
import styles from './Pokemon.module.scss';
import { useNavigate }from "react-router-dom";
import { TeamContext } from "context/TeamContext";

interface IPokemonProps {
    pokemon: ISinglePokemonResponse;
    teamDisplay?: boolean;
}

const Pokemon = (props: IPokemonProps) => {
    const navigate = useNavigate();

    const context = useContext(TeamContext);
    const { team, handleAddPokemon, handleRemovePokemon } = context;

    const handleProceed = (id: number) => {
        if(!id) return;
        navigate('/pokemon/' + id);
    };

    const parseName = (name: string) => name.replace('-', " ");

    const renderAbilities = props.pokemon.abilities && 
        props.pokemon.abilities.map((ability, index) => {
            return <li key={index}>{ parseName(ability.ability.name) }</li>
        });
    const renderTypes = props.pokemon.types && 
        props.pokemon.types.map((type, index) => {
        return <li key={index}>{ type.type.name }</li>
    });

    const renderMoves = props.pokemon.moves && 
        props.pokemon.moves.map((move, index) => {
        return <li key={index}>{ parseName(move.move.name) }</li>
    }).slice(0, 5);

    const renderAddButton = !props.teamDisplay && <button onClick={() =>handleAddPokemon(props.pokemon)}>Add to Team</button>;

    const renderRemoveButton = team.find(member => member.id === props.pokemon.id) && <button onClick={() =>handleRemovePokemon(props.pokemon)}>Remove from Team</button>
    

    // If you have only one root element (here it's article) --> you don't need to wrap everything in fragments 
    //(FIXED, removed <section></section> as a wrapper in article)
    return (
        <>
            <article className={styles.container}>
                <section className={styles.pokemonAbout}>
                    <p className={styles.pokemonName}>#{props.pokemon.id}</p>
                    <p className={styles.pokemonName} onClick={() => handleProceed(+props.pokemon.id)}>Pokemon: {props.pokemon.name}</p>
                    <p className={styles.pokemonName}>Weight: {props.pokemon.weight} kg</p>
                </section>
                <section className={styles.pokemonInformation}>
                    <label className={styles.pokemonLabel}>Abilites:</label>
                    <ul className={styles.pokemonInfo}>
                        {renderAbilities}
                    </ul>
                    <label className={styles.pokemonLabel}>Types:</label>
                    <ul className={styles.pokemonInfo}>
                        {renderTypes}
                    </ul>
                    <label className={styles.pokemonLabel}>Moves:</label>
                    <ul className={styles.pokemonInfo}>
                        {renderMoves}
                    </ul>
                </section>
                <img className={styles.pokemonImage} src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
                <hr />
                {renderAddButton}
                {renderRemoveButton}
            </article>
        </>
    )
}

export default Pokemon;