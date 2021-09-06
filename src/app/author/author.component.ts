import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  public author = '';
  public books = Array();

  constructor(private route: ActivatedRoute, private _booksService: BookService,
    private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(paramsAuthor => {
      this.author = paramsAuthor.author;
    });

    this._booksService.getAuthor(this.author)
        .subscribe(data => this.books = data);
  }

  backClicked() {
    this._location.back();
  }
}
