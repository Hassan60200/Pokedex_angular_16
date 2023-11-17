import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIndexComponent } from './pokemon-index.component';

describe('PokemonIndexComponent', () => {
  let component: PokemonIndexComponent;
  let fixture: ComponentFixture<PokemonIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonIndexComponent]
    });
    fixture = TestBed.createComponent(PokemonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
