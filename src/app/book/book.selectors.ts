import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, booksFeatureKey, selectAll } from './book.reducer';


export const selectBookState = createFeatureSelector<State>(
    booksFeatureKey
);

export const selectBooks = createSelector(selectBookState, selectAll);
// export const selectBook = createSelector(
//     selectBookState,
//     (state: State) => state.selectedBook
// );