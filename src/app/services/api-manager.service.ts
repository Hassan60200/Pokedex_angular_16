import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  private urlPokemon: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor() {
  }

  getAllPokemons(offset: number, limit: number) {
    return fetch(`${this.urlPokemon}?offset=${offset}&limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        return data.results;
      })
      .catch(error => console.error('Error:', error));
  }

  getDetailsPokemon(id: number){
    return fetch(`${this.urlPokemon}${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data;
      })
      .catch(error => console.error('Error:', error));
  }
}
