import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperEditinListComponent } from './newspaper-edition-list.component';

describe('NewspaperEditinListComponent', () => {
  let component: NewspaperEditinListComponent;
  let fixture: ComponentFixture<NewspaperEditinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperEditinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperEditinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
