import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-achievement',
  standalone: true,
  templateUrl: './achievement.html',
  styleUrls: ['./achievement.css']
})

export class Achievement {
  @Input() acvtOne = "I'm";
  @Input() acvtTwo = "part of";
  @Input() acvtThree = "clubs";
}