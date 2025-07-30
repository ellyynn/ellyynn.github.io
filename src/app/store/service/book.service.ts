import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BookApiService} from 'src/app/store/service/book-api.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Book} from 'src/app/model/book.model';
import {concatMap, interval, map, mergeMap, repeat} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApiService = inject(BookApiService);
  //bookList = toSignal(this.bookApiService.getAllBooks(), {initialValue: []});
  bookList = toSignal(
    interval(1000).pipe(
      concatMap(() => this.bookApiService.getAllBooks()),
      repeat(Infinity)),
    {initialValue: toSignal(this.bookApiService.getAllBooks(), {initialValue: []})()});


}
