import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleProvinceComponent } from './nouvelle-province.component';

describe('NouvelleProvinceComponent', () => {
  let component: NouvelleProvinceComponent;
  let fixture: ComponentFixture<NouvelleProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
