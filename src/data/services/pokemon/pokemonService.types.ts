/* eslint-disable @typescript-eslint/no-unused-expressions */
export interface IPokemon {
  name: string;
  url: string;
}
[];
export interface IPersistencePokemonList {
  count?: number;
  next?: string;
  previous?: string | null;
  results: IPokemon[];
}

export type SpecieType = {
  color: string;
  description: string;
  specie: string;
  habitat: string | null;
  evolutionId: number;
};

export type PokemonType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export interface ISprites {
  back_default: string | undefined;
  back_female: string | undefined;
  back_shiny: string | undefined;
  back_shiny_female: string | undefined;
  front_default: string | undefined;
  front_female: string | undefined;
  front_shiny: string | undefined;
  front_shiny_female: string | undefined;
}

export interface ITypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export type PersistencePokemonDataType = {
  id: number;
  name: string;
  sprites: ISprites;
  height: number;
  weight: number;
  stats: { name: string; baseStat: number }[];
  types: ITypes[];
  species: SpecieType | null;
  abilities: {
    ability: {
      name: string;
      isHidden: boolean;
    };
  }[];
};

export type DomainPokemonDataType = {
  id: number;
  name: string;
  sprites: ISprites;
  height: number;
  weight: number;
  stats: { name: string; baseStat: number }[];
  types: ITypes[];
  species: SpecieType | null;
  abilities: {
    ability: {
      name: string;
      isHidden: boolean;
    };
  }[];
};
