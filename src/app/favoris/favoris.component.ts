import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent  implements OnInit{
 pokemons: string | null = localStorage.getItem('pokemons');
  ngOnInit() {
   this.pokemons
  }
}
