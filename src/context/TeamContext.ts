import { createContext } from 'react';
import { ISinglePokemonResponse } from 'components/shared/interfaces/ISinglePokemonResponse';

export interface ITeamContext {
    team: Array<ISinglePokemonResponse>;
    handleAddPokemon: (pokemon: ISinglePokemonResponse) => void;
    handleRemovePokemon: (pokemon: ISinglePokemonResponse) => void;
};

const initialValue = {
    team: [],
    handleAddPokemon: (pokemon: ISinglePokemonResponse) => {},
    handleRemovePokemon: (pokemon: ISinglePokemonResponse) => {},
};

const TeamContext = createContext<ITeamContext>(initialValue);

export { TeamContext };

