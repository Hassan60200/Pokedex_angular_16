import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListByTypesComponent } from './pokemons-list-by-types.component';

describe('PokemonsListByTypesComponent', () => {
  let component: PokemonsListByTypesComponent;
  let fixture: ComponentFixture<PokemonsListByTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsListByTypesComponent]
    });
    fixture = TestBed.createComponent(PokemonsListByTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
