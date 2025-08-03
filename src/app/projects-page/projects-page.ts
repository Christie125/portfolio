import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { ContentCircle } from '../content-circle/content-circle';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-projects-page',
  imports: [
    Footer,
    Contact,
    Header,
    ContentCircle,
    NavBar
  ],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css'
})
export class ProjectsPage {

}
