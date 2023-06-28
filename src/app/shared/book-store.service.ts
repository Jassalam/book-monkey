import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private books : Book[] = [];

  private apiUrl = 'https://api5.angular-buch.com';

  constructor(private http: HttpClient) { 
    this.books = [
      {
        isbn : '12345',
        title : 'Tierisch gut kochen',
        authors : ['Mrs Chimp', 'Mr Gorilla'],
        published : '2022-06-20',
        subtitle : 'Rezepte von Affe bis Zebra',
        thumbnailUrl : 'https://cdn.ng-buch.de/kochen.png',
        description : 'Immer lecker und gut'
      },
      {
        isbn : '67890',
        title : 'Backen mit Affen',
        authors : ['Orang Utan'],
        published : '2022-07-15',
        subtitle : 'Bananenbrot und mehr',
        thumbnailUrl : 'https://cdn.ng-buch.de/backen.png',
        description : 'Tolle Backtipps für Mensch und Tier'
      }
    ];
  }

  getAll() : Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }
  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${isbn}`);
  }
  remove(isbn: string): Observable<unknown>{
    return this.http.delete(`${this.apiUrl}/books/${isbn}`);
  }
  getAllSearch(term: string): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    )
  }

create(book: Book): Observable<Book>{
  return this.http.post<Book>(`${this.apiUrl}/books`, book);
}

update(book: Book): Observable<Book>{
  return this.http.put<Book>(
    `${this.apiUrl}/books/${book.isbn}`,
    book,
  )
}
check(isbn: string): Observable<boolean>{
  return this.http.get<boolean>(
    `${this.apiUrl}/books/${isbn}/check`
  )
}

}
