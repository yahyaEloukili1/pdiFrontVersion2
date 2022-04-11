import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauAxeComponent } from './nouveau-axe.component';

describe('NouveauAxeComponent', () => {
  let component: NouveauAxeComponent;
  let fixture: ComponentFixture<NouveauAxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauAxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauAxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
