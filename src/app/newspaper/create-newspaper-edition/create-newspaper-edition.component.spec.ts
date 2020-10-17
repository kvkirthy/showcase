import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewspaperEditionComponent } from './create-newspaper-edition.component';

describe('CreateNewspaperEditionComponent', () => {
  let component: CreateNewspaperEditionComponent;
  let fixture: ComponentFixture<CreateNewspaperEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewspaperEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewspaperEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
