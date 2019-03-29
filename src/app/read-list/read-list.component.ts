import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.scss']
})
export class ReadListComponent implements OnInit {

  books: Book[] = [];
  constructor(
      private bookService: BookService) {
  }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookService.getAll().subscribe(data => this.books = data.filter(book => book.read === true));
  }
  reMark(i) {
  }

}
