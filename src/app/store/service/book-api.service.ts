import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Book} from 'src/app/model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private bookTestHungerGame1: Book = {
    id: 1,
    title: "Hunger Game"
  }
  private bookTestHungerGame2: Book = {
    id: 2,
    title: "Hunger Game 2"
  }

  getAllBooks() {
    const random = Math.round(Math.random());
    if(random) {
      return of([this.bookTestHungerGame1]);
    }
    return of([this.bookTestHungerGame2]);
  }
}
