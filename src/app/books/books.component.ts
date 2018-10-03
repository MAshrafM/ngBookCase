import { Component, OnInit, Input } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';
import { Subscription } from 'rxjs';

import { EditBookComponent } from './book/edit-book/edit-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  booksList: Book[];
  
  constructor(private bookService: BookService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getBooks();
  }
  
  getBooks(){
    this.bookService.getBooks().subscribe((data: Book) => {
      this.booksList = data['books'];
    });
  }
  
  editBook(selectedBook){
    const editBookModalRef = this.modalService.open(EditBookComponent);
    editBookModalRef.componentInstance.book = {
      id: selectedBook.id,
      title: selectedBook.title,
      author: selectedBook.author,
      cover: selectedBook.cover,
      publishDate: selectedBook.publishDate
    };
  }
  
  deleteBook(selectedBook){
    const deleteBookModalRef = this.modalService.open(DeleteBookComponent);
    deleteBookModalRef.componentInstance.book = {
      id: selectedBook.id,
      title: selectedBook.title
    };
  }

}
