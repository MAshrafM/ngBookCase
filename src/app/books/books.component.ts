import { Component, OnInit,  OnDestroy } from '@angular/core';
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
  editedBookSubscription: Subscription;
  newBookSubscription: Subscription;
  deletedBookSubscription: Subscription;
  
  constructor(private bookService: BookService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getBooks();
    this.editedBookSubscription = this.bookService.editedBook.subscribe(editedBook => {
      this.updateBook(editedBook);
    });
    this.newBookSubscription = this.bookService.newBook.subscribe(newBook => {
      this.addBook(newBook);
    });
    this.deletedBookSubscription = this.bookService.deletedBook.subscribe(deletedBook => {
      this.removeBook(deletedBook);
    });
  }
  
  ngOnDestroy() {
    this.editedBookSubscription.unsubscribe();
    this.newBookSubscription.unsubscribe();
    this.deletedBookSubscription.unsubscribe();
  }
  
  getBooks(){
    this.bookService.getBooks().subscribe((data: Book) => {
      this.booksList = data['books'];
    });
  }
  
  addBook(newBook) {
    this.booksList.push(newBook);
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
  
  updateBook(editedBook) {
    for (let i = 0; i < this.booksList.length; i++) {
      if (this.booksList[i].id === editedBook.id) {
        this.booksList[i].title = editedBook.title;
        this.booksList[i].author = editedBook.author;
        this.booksList[i].cover = editedBook.cover;
        this.booksList[i].publishDate = editedBook.publishDate;
        return;
      }
    }
  }
  
  deleteBook(selectedBook){
    const deleteBookModalRef = this.modalService.open(DeleteBookComponent);
    deleteBookModalRef.componentInstance.book = {
      id: selectedBook.id,
      title: selectedBook.title
    };
  }
  
  removeBook(deletedBook) {
    for (let i = 0; i < this.booksList.length; i++) {
      if (this.booksList[i].id === deletedBook) {
        this.booksList = this.booksList.filter(element => element.id !== deletedBook);
      }
    }
  }

}
