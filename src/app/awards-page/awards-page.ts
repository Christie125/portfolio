import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { NavBar } from '../nav-bar/nav-bar';
@Component({
  selector: 'app-awards-page',
  imports: [
    Footer,
    Contact,
    Header,
    NavBar
  ],
  templateUrl: './awards-page.html',
  styleUrl: './awards-page.css'
})
export class AwardsPage {

}
