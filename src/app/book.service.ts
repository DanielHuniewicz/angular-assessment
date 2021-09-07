import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBooks } from './books';
import { Book } from './book/book.model';
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

  createBook(payload: Book): Observable<Book> {
    return this.http.post<Book>(this._url, payload);
  }

  deleteBook(id: number) {
    return this.http.delete(this._url + id);
  }
}
