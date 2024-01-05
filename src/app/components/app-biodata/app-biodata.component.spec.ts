import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBiodataComponent } from './app-biodata.component';

describe('AppBiodataComponent', () => {
  let component: AppBiodataComponent;
  let fixture: ComponentFixture<AppBiodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBiodataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBiodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
