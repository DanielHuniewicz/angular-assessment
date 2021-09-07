import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { BookService } from "../book.service";
import * as fromBooksActions from "./book.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooksActions.loadBooks),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map(books => fromBooksActions.loadBooksSuccess({ books })),
          catchError(error =>
            of(fromBooksActions.loadBooksFailure({ error }))
          )
        )
      )
    )
  );

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooksActions.addBook),
      mergeMap( action =>
        this.bookService.createBook(action.book).pipe(
          map(book => fromBooksActions.addBookSuccess({ book })),
          catchError(error =>
            of(fromBooksActions.loadBooksFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/table"]))
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private router: Router
  ) {}
}