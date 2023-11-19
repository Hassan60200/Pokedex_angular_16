import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonIndexComponent} from "./pokemon-index/pokemon-index.component";
import {PokemonShowComponent} from "./pokemon-show/pokemon-show.component";
import {TypesPokemonComponent} from "./types-pokemon/types-pokemon.component";
import {PokemonsListByTypesComponent} from "./pokemons-list-by-types/pokemons-list-by-types.component";
import {ContactComponent} from "./contact/contact.component";
import {FavorisComponent} from "./favoris/favoris.component";


const routes: Routes = [
  {
    path: '', component: PokemonIndexComponent
  },
  {
    path: 'pokemon/:id', component: PokemonShowComponent
  },
  {
    path: 'pokemons/type/:id', component: PokemonsListByTypesComponent
  },
  {
    path: 'types', component: TypesPokemonComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'favoris', component: FavorisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
