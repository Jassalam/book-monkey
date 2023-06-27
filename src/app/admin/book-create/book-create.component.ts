import { Component } from '@angular/core';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { Book } from 'src/app/shared/book';
import { Router } from '@angular/router';

@Component({
  selector: 'bm-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {

  constructor(
    private service: BookStoreService,
    private router: Router
  ){}

  create(book: Book){
    this.service.create(book).subscribe(createBook => {
      this.router.navigate(['/books', createBook.isbn]);
    });
  }

}
