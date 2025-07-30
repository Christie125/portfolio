import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';

@Component({
  selector: 'app-clubs-page-actual',
  imports: [
    Footer,
    Contact,
    Header
  ],
  templateUrl: './clubs-page-actual.html',
  styleUrl: './clubs-page-actual.css'
})
export class ClubsPageActual {

}
