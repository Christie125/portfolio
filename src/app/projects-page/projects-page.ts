import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { ContentCircle } from '../content-circle/content-circle';

@Component({
  selector: 'app-projects-page',
  imports: [
    Footer,
    Contact,
    Header,
    ContentCircle
  ],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css'
})
export class ProjectsPage {

}
