import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerStoryComponent } from './banner-story.component';

describe('BannerStoryComponent', () => {
  let component: BannerStoryComponent;
  let fixture: ComponentFixture<BannerStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
