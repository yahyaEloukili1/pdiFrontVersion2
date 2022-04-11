import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleMoComponent } from './nouvelle-mo.component';

describe('NouvelleMoComponent', () => {
  let component: NouvelleMoComponent;
  let fixture: ComponentFixture<NouvelleMoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleMoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
