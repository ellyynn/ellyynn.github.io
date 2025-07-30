import { Routes } from '@angular/router';
import {BookList} from 'src/app/store/book-list/book-list';

export const routes: Routes = [
  {
    path: 'books',
    title: 'Books',
    component: BookList
  },
  {
    path: '**', component: BookList
  }
];
