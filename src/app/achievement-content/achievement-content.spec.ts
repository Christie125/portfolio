import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementContent } from './achievement-content';

describe('AchievementContent', () => {
  let component: AchievementContent;
  let fixture: ComponentFixture<AchievementContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
