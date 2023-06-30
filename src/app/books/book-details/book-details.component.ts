import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book$ = this.service.getSingle(isbn);
  }

  removeBook(isbn: string) {
    this.service.remove(isbn).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }

}



