import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCommuneComponent } from './nouvelle-commune.component';

describe('NouvelleCommuneComponent', () => {
  let component: NouvelleCommuneComponent;
  let fixture: ComponentFixture<NouvelleCommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCommuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
