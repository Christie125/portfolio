import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './header/header'; // <-- Import Test component
import { Achievement } from './achievement/achievement';
import { Marquee } from './marquee/marquee'; // <-- Import Marquee component


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Achievement, Marquee], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}