import { Component, OnInit } from '@angular/core';
import {ApiManagerService} from "../services/api-manager.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemons-list-by-types',
  templateUrl: './pokemons-list-by-types.component.html',
  styleUrls: ['./pokemons-list-by-types.component.css']
})
export class PokemonsListByTypesComponent implements OnInit{
  pokemons : any[] = []
  idType?: number;
  idPokemon?: number;

  constructor(private api: ApiManagerService, private route: ActivatedRoute) {
  }

  extractPokemonIdFromUrl(url: string): number {
    const trimmedUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    const segments = trimmedUrl.split('/');
    return +segments[segments.length - 1];
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idType = +params['id'];
      this.api.getPokemonsByTypes(this.idType).then(data => {
        this.pokemons = data.pokemon.map((item: { pokemon: { url: string; }; }) => ({
          ...item.pokemon,
          id: this.extractPokemonIdFromUrl(item.pokemon.url)
        }));
        console.log(this.pokemons);
      }).catch(error => console.error(error));
    });
  }

}
