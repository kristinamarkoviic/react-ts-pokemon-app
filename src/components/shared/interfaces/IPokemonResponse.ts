import { IPokemon } from './IPokemon';

type TPage = string | null;

export interface IPokemonResponse {
    count: number;
    next: TPage;
    previous: TPage;
    results: Array<IPokemon>;
};
