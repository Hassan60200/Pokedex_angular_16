import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/api-manager.service";
import {Pokemon} from "../model/pokemon";
import {ActivatedRoute} from '@angular/router';
import {FavorisManagerService} from "../services/favoris-manager.service";

@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.css']
})
export class PokemonShowComponent implements OnInit {
  pokemon: Pokemon | undefined;
  idPokemon?: number;
  favoris ?: boolean = false;

  constructor(private api: ApiManagerService, private route: ActivatedRoute, private localStore: FavorisManagerService) {
  }

  handleFavs() {
    this.favoris = true;
    const pokemonData = {
      name: this.pokemon?.name,
      id: this.pokemon?.id
    };
    if (this.favoris){
      this.localStore.saveData('pokemons', JSON.stringify(pokemonData));
    }
  }

  deleteFavs() {
    if (this.favoris){
      this.favoris = false;
      this.localStore.removeData('pokemons');
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPokemon = +params['id'];
      this.api.getDetailsPokemon(this.idPokemon).then(data => {
        this.pokemon = data;
      }).catch(error => console.error(error));
    });

  }

}
