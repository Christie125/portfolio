import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCircle } from './content-circle';

describe('ContentCircle', () => {
  let component: ContentCircle;
  let fixture: ComponentFixture<ContentCircle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCircle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCircle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
