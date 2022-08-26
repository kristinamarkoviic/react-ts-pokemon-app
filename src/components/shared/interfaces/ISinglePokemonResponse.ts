interface ISprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface IType {
    name: string;
    url: string;
}

interface IAbility {
    ability: ISingleAbility;
    is_hidden: boolean;
    slot: number;
}

interface ISingleAbility {
    name: string;
    url: string;
}

interface IForm {
    name: string;
    url: string;
}

interface IGameIndices {
    game_index: string;
    version: IVersion;
}

interface IVersion {
    name: string;
    url: string;
}

interface IItem {
    name: string;
    url: string;
}
interface IVersionDetail {
    rarity: number;
}

interface IHeldItems {
    item: IItem;
    version_details: Array<IVersionDetail>;
}

interface ISingleMove {
    name: string;
    url: string;
}

interface IMoveLearnMethod {
    name: string;
    url: string;
}

interface IVersionGroup {
    name: string;
    url: string;
}

interface IVersionGroupDetails {
    level_learned_at: string;
    move_learn_method: IMoveLearnMethod;
    version_group: IVersionGroup;
}

interface IMove {
    move: ISingleMove;
    version_group_details: Array<IVersionGroupDetails>;
}

interface ISpecies {
    name: string;
    url: string;
}

interface IStats {
    base_stat: number;
    effort: number;
    stat: ISingleStat
}

interface ISingleStat {
    name: string;
    url: string;
}

interface ITypes {
    slot: number;
    type: IType
}

export interface ISinglePokemonResponse {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Array<IAbility>;
    forms: Array<IForm>;
    game_indicies: Array<IGameIndices>;
    held_items: Array<IHeldItems>;
    location_area_encounters: string;
    moves: Array<IMove>;
    species: ISpecies;
    sprites: ISprites;
    stats: Array<IStats>;
    types: Array<ITypes>;
    past_types: Array<any>;
};