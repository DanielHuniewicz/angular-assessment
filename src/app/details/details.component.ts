import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  public id = '';
  public books = Array();

  constructor(private route: ActivatedRoute, private _booksService: BookService,
    private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

    var y: number = +this.id;

    this._booksService.getBook(y)
        .subscribe(data => this.books = data);
  }

  backClicked() {
    this._location.back();
  }

}