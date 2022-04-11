import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoComponent } from './edit-mo.component';

describe('EditMoComponent', () => {
  let component: EditMoComponent;
  let fixture: ComponentFixture<EditMoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
