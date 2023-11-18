import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/api-manager.service";

@Component({
  selector: 'app-types-pokemon',
  templateUrl: './types-pokemon.component.html',
  styleUrls: ['./types-pokemon.component.css']
})
export class TypesPokemonComponent implements OnInit {
  types: any[] = [];

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.api.getTypesPokemons().then(data => {
      this.types = data.results;
    }).catch(error => console.error(error));
  }
}
