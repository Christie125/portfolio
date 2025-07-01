import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './header/header'; 
import { Achievement } from './achievement/achievement';
import { Marquee } from './marquee/marquee';
import { Contact } from './contact/contact'; 
import { Footer } from './footer/footer'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Achievement, Marquee, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}