import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formCreateBook = this.fb.group({
    name: [''],
    read: [false]
  });


  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private route: Router) {
  }


  ngOnInit() {
  }

  create() {
    this.bookService.create(this.formCreateBook.value).subscribe(data => {
      alert('created succsess');
      console.log(data);
      this.route.navigate(['/list']);
    }, error => {
      alert('that bai');
      console.log(error);
    });
  }

}
