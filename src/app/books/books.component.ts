import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  booksList: Book[];
  
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks(){
    this.bookService.getBooks().subscribe((data: Book) => {
      this.booksList = data['books'];
    });
  }

}
