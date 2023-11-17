import { Component, OnInit } from '@angular/core';
import {ApiManagerService} from "../services/api-manager.service";
import {Pokemon} from "../model/pokemon";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.css']
})
export class PokemonShowComponent implements OnInit{
 pokemon: Pokemon | undefined;
 idPokemon?: number;
constructor(private api: ApiManagerService, private route: ActivatedRoute) {
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPokemon = +params['id']; // Use '+' to convert string to number
      this.api.getDetailsPokemon(this.idPokemon).then(data => {
        this.pokemon = data;
        console.log(this.pokemon?.types);
      }).catch(error => console.error(error));
    });
  }

}
