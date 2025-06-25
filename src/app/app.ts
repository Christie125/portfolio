import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './header/header'; // <-- Import Test component

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test], // <-- Add Test here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}