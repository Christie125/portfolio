import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-clubs-page-actual',
  imports: [
    Footer,
    Contact,
    Header,
    NavBar
  ],
  templateUrl: './clubs-page-actual.html',
  styleUrl: './clubs-page-actual.css'
})
export class ClubsPageActual {

}
