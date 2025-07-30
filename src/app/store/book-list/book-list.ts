import {Component, inject} from '@angular/core';
import {BookService} from 'src/app/store/service/book.service';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {
  private bookService = inject(BookService);
  bookList = this.bookService.bookList;

}
