import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PokemonIndexComponent} from './pokemon-index/pokemon-index.component';
import {PokemonShowComponent} from './pokemon-show/pokemon-show.component';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TypesPokemonComponent} from './types-pokemon/types-pokemon.component';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsListByTypesComponent } from './pokemons-list-by-types/pokemons-list-by-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonIndexComponent,
    PokemonShowComponent,
    HeaderComponent,
    TypesPokemonComponent,
    PokemonsListByTypesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
