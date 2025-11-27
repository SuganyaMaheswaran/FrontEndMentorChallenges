import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListViewComponent } from './country-list-view.component';

describe('CountryListViewComponent', () => {
  let component: CountryListViewComponent;
  let fixture: ComponentFixture<CountryListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
