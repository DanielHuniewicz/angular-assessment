import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from './books';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _url: string = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBooks[]>{
    return this.http.get<IBooks[]>(this._url);
  }

  getBook(id: number): Observable<IBooks[]> {
    return this.getBooks()
    .pipe(
      map(books => books.filter(book => book.id === id))
    );
  }

  getAuthor(author: string): Observable<IBooks[]> {
    return this.getBooks()
    .pipe(
      map(books => books.filter(book => book.author === author))
    );
  }

  // addBook (book: []) {
  //   if (book) {
  //     this.heroService.addHero(book).subscribe(hero => {
  //       //I assume the response from the addHero Observable is a Hero object
  //       this.heroes.push(hero);
  //     });
  //   } else {
  //     console.error('Error! empty');
  //   }
  // }
}
