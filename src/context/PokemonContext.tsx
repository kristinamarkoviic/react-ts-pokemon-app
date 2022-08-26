import { createContext, useContext } from 'react';

import { ISinglePokemonResponse } from 'components/shared/interfaces/ISinglePokemonResponse';

const PokemonContext = createContext<ISinglePokemonResponse | null>(null);

export const usePokemonContext = () => useContext(PokemonContext);

export default PokemonContext;