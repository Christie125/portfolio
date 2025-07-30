import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Contact } from '../contact/contact';
import { Header } from '../header/header';
@Component({
  selector: 'app-awards-page',
  imports: [
    Footer,
    Contact,
    Header
  ],
  templateUrl: './awards-page.html',
  styleUrl: './awards-page.css'
})
export class AwardsPage {

}
