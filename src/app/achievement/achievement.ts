import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  imports: [],
  templateUrl: './achievement.html',
  styleUrl: './achievement.css'
})
export class Achievement {
  @Input() acvtOne = "I'm";
  @Input() acvtTwo = "part of";
  @Input() acvtThree = "clubs";
}