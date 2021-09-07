import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../book/book.reducer'
import { addBook } from '../book/book.actions';
import { loadBooks } from '../book/book.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public author = '';
  public authors = Array();
  simpleForm: FormGroup;

  constructor( private _booksService: BookService, private _location: Location,
    private store: Store<State>,
    private formBuilder: FormBuilder){
      this.simpleForm = this.formBuilder.group({
        id: formBuilder.control('', [Validators.required]),
        title: formBuilder.control('', [Validators.required, Validators.minLength(7)]),
        author: formBuilder.control('', [Validators.required])
      })
  }

  ngOnInit() {
    this._booksService.getBooks()
        .subscribe(data => this.authors = data);
  }

  backClicked() {
    this._location.back();
  }

  public onSubmit(){
    this.store.dispatch(addBook({ book: this.simpleForm.value}));
  }

  public control(name: string){
    return this.simpleForm.get(name);
  }

}
