import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../book/book.model';
import { State } from '../book/book.reducer';
import { loadBooks } from '../book/book.actions';
import * as fromActions from "../book/book.actions";
import {selectBooks} from "../book/book.selectors"


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public books2 = Array();
  books$: Observable<Book[]>
  constructor(private _booksService: BookService,
  private store:Store<State>) {}

  ngOnInit() {
    this._booksService.getBooks()
        .subscribe(data => this.books2 = data);

    // this.store.dispatch(loadBooks());
    // this.loadBooks();
  }

  loadBooks(){
    this.books$ = this.store.pipe(select(selectBooks));
  }

  deleteRow(book : number){
    const index = this.books2.indexOf(book);
    this.books2.splice(index, 1);
    // this._booksService.deleteBook(book);
  }

}
