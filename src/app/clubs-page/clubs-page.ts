import { Component } from '@angular/core';
import { Test } from '../header/header';
import { Achievement } from '../achievement/achievement';
import { Marquee } from '../marquee/marquee';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import { AchievementContent } from '../achievement-content/achievement-content';
import { ContentCircle } from '../content-circle/content-circle';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-clubs-page',
  standalone: true,
  imports: [
    Test,
    Achievement,
    Marquee,
    Contact,
    Footer,
    AchievementContent,
    ContentCircle,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './clubs-page.html',
  styleUrl: './clubs-page.css'
})
export class ClubsPage {

}