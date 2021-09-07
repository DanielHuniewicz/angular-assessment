import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Book } from './book.model';

export const loadBooks = createAction(
  '[Book Table Component] Load Books'
  // props<{ books: Book[] }>()
);

export const loadBooksSuccess = createAction(
  "[Book Table Effect] Load Books Success",
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  "[Book Effect] Load Books Failure",
  props<{ error: any }>()
);

export const loadBook = createAction(
  '[Book Details Component] Load Book',
  props<{ id: number }>()
);

export const loadBookSuccess = createAction(
  "[Book Details Effect] Load Book Success",
  props<{ selectedBook: Book }>()
);

export const loadBookFailure = createAction(
  "[Book Effect] Load Books Failure",
  props<{ error: any }>()
);

export const addBook = createAction(
  '[Book Add Component] Add Book',
  props<{ book: Book }>()
);

export const addBookSuccess = createAction(
  '[Book Add Effect] Add Book Success',
  props<{ book: Book }>()
);


export const upsertBook = createAction(
  '[Book/API] Upsert Book',
  props<{ book: Book }>()
);

export const addBooks = createAction(
  '[Book/API] Add Books',
  props<{ books: Book[] }>()
);

export const upsertBooks = createAction(
  '[Book/API] Upsert Books',
  props<{ books: Book[] }>()
);

export const updateBook = createAction(
  '[Book/API] Update Book',
  props<{ book: Update<Book> }>()
);

export const updateBooks = createAction(
  '[Book/API] Update Books',
  props<{ books: Update<Book>[] }>()
);

export const deleteBook = createAction(
  '[Book/API] Delete Book',
  props<{ id: string }>()
);

export const deleteBooks = createAction(
  '[Book/API] Delete Books',
  props<{ ids: string[] }>()
);

export const clearBooks = createAction(
  '[Book/API] Clear Books'
);