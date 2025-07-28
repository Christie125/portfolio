import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsPageActual } from './clubs-page-actual';

describe('ClubsPageActual', () => {
  let component: ClubsPageActual;
  let fixture: ComponentFixture<ClubsPageActual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsPageActual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsPageActual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
