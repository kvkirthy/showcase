import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperMainComponent } from './nine-per-page-layout.component';

describe('NewspaperMainComponent', () => {
  let component: NewspaperMainComponent;
  let fixture: ComponentFixture<NewspaperMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
