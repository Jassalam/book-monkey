import { Component } from '@angular/core';
import { Book } from './shared/book';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  book: Book | null = null;

  constructor(public auth: AuthService){}

  showList(){
    this.book = null;
  }
 
  showDetails(book: Book){
    this.book = book;
  }
}
