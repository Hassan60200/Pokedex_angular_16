import {Component, OnInit} from '@angular/core';
import {FavorisManagerService} from "../services/favoris-manager.service";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  pokemonData: { name: string; id: number } | null = null;

  constructor(private localStore: FavorisManagerService) {
  }

  ngOnInit() {
    const jsonString = this.localStore.getData('pokemons');
    if (jsonString) {
      console.log(JSON.parse(jsonString))
      this.pokemonData = JSON.parse(jsonString);
      console.log(this.pokemonData)
    }
  }
}
