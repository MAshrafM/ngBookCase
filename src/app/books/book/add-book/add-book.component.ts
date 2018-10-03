import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BookService } from '../../book.service';
import { Book } from '../../book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent implements OnInit{
  booksList: Book[];
  newBook: object;
  showFormError = false;
  showDuplicateError = false;


  constructor(private bookService: BookService, public activeModal: NgbActiveModal) {}

  ngOnInit() {this.getBooks();}

  getBooks(){
    this.bookService.getBooks().subscribe((data: Book) => {
      this.booksList = data['books'];
    });
  }

  onAddBook(bookAddForm: NgForm){
    for(let i = 0; i < this.booksList.length; i++){
      let book = this.booksList[i];
      if(book.id === bookAddForm.value.newBookId || book.title === bookAddForm.value.newBookTitle){
        this.showDuplicateError = true;
      }
      return;
    }
    
    if(bookAddForm.valid){
      this.activeModal.dismiss();
      const formattedTitle = bookAddForm.value.newBookTitle.replace(/[^\w\s]/gi, '');
      this.newBook = {
        id: bookAddForm.value.newBookId,
        title: formattedTitle,
        author: bookAddForm.value.newBookAuthor,
        cover: bookAddForm.value.newBookCover,
        rating: bookAddForm.value.newBookRating,
        publishDate: bookAddForm.value.newBookPublishDate
      };
      this.bookService.addBook(this.newBook);
    } else {
      this.showFormError = true;
    }
  }

}