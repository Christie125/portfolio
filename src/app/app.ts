import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './header/header'; 
import { Achievement } from './achievement/achievement';
import { Marquee } from './marquee/marquee';
import { Contact } from './contact/contact'; 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Achievement, Marquee, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}