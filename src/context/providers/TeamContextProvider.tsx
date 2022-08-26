import { FC, useState } from 'react';
import { TeamContext, ITeamContext } from '../TeamContext';
import { ISinglePokemonResponse } from 'components/shared/interfaces/ISinglePokemonResponse';

const TeamContextProvider: FC = (props) => {
    const { children } = props;

    const [team, setTeam] = useState<Array<ISinglePokemonResponse>>([]);

    const handleAddPokemon = (pokemon: ISinglePokemonResponse) => {
        const newTeam = [...team, pokemon];
        setTeam(newTeam);
    };


    const handleRemovePokemon = (pokemon: ISinglePokemonResponse) => {
        const newTeam = team.filter(member => member.id !== pokemon.id);
        setTeam(newTeam);
    };

    const contextData: ITeamContext = {
        team,
        handleAddPokemon,
        handleRemovePokemon,
    };

    return (
        <TeamContext.Provider value={contextData}>
            {children}
        </TeamContext.Provider>
    )
};

export { TeamContextProvider }