import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitresOuvragesComponent } from './maitres-ouvrages.component';

describe('MaitresOuvragesComponent', () => {
  let component: MaitresOuvragesComponent;
  let fixture: ComponentFixture<MaitresOuvragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaitresOuvragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitresOuvragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
