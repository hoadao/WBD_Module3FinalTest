import {Component, OnInit} from '@angular/core';
import {BookService} from '../services/book.service';
import {Book} from '../model/book';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private route: Router) {
  }
  books: Book[] = [];
  formMarkBook = this.fb.group({
    name: [''],
    read: [true]
  });
  formCreateBook = this.fb.group({
    name: [''],
    read: [false]
  });

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.bookService.getAll().subscribe(data => this.books = data.filter(book => book.read === false));
  }
  mark(book) {
    if (confirm('Bạn đã đọc xong rồi?')) {
      this.bookService.mark(book).subscribe(data => {
        console.log(data);
      });
      this.ngOnInit();
    }
  }
  create() {
    this.bookService.create(this.formCreateBook.value).subscribe(data => {
      console.log(data);
      this.route.navigate(['/list']);
    }, error => {
      console.log(error);
    });
    this.ngOnInit();
  }

}
