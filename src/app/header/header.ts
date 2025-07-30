import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  inputs: ['title', 'subtitle', 'titleTwo', 'subtitleTwo']
})
export class Header {
  title: string = "Christie";
  subtitle: string = "A passionate";
  titleTwo: string = "Berenshteyn";
  subtitleTwo: string = "student";
}
