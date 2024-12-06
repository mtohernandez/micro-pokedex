import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelibComponent } from './pokelib.component';

describe('PokelibComponent', () => {
  let component: PokelibComponent;
  let fixture: ComponentFixture<PokelibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokelibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
