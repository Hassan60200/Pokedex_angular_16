import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonIndexComponent} from "./pokemon-index/pokemon-index.component";
import {PokemonShowComponent} from "./pokemon-show/pokemon-show.component";
import {TypesPokemonComponent} from "./types-pokemon/types-pokemon.component";


const routes: Routes = [
  {
    path: '', component: PokemonIndexComponent
  },
  {
    path: 'pokemon/:id', component: PokemonShowComponent
  },
  {
    path: 'types', component: TypesPokemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
