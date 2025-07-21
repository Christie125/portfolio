import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './header/header'; 
import { Achievement } from './achievement/achievement';
import { Marquee } from './marquee/marquee';
import { Contact } from './contact/contact'; 
import { Footer } from './footer/footer'
import { AchievementContent } from './achievement-content/achievement-content';
import { ContentCircle } from './content-circle/content-circle';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Achievement, Marquee, Contact, Footer, AchievementContent, ContentCircle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}