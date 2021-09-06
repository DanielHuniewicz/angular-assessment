import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public books = Array();
  
  constructor(private _booksService: BookService) { }

  ngOnInit() {
    this._booksService.getBooks()
        .subscribe(data => this.books = data);
  }

  deleteRow(book : number){
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

}
