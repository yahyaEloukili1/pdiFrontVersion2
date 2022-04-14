import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecteurComponent } from './new-secteur.component';

describe('NewSecteurComponent', () => {
  let component: NewSecteurComponent;
  let fixture: ComponentFixture<NewSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
