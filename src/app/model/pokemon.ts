export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  stats: any;
}

interface TypeDetail {
  name: string;
  url: string;
}

interface PokemonType {
  slot: number;
  type: TypeDetail;
}
