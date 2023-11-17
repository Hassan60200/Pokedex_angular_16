import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/api-manager.service";

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.css']
})
export class PokemonIndexComponent implements OnInit {
  pokemons: any[] = []

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.api.getAllPokemons(0, 151).then(data => {
      this.pokemons = data;
    }).catch(error => console.error(error));
  }
}
