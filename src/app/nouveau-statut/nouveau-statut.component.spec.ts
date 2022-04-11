import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauStatutComponent } from './nouveau-statut.component';

describe('NouveauStatutComponent', () => {
  let component: NouveauStatutComponent;
  let fixture: ComponentFixture<NouveauStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauStatutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
