import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BookService } from '../../book.service';
import { Book } from '../../book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})

export class EditBookComponent{
  @Input() book: Book;
  editedBook: object;
  showFormError = false;


  constructor(private bookService: BookService, public activeModal: NgbActiveModal) {}


  onEditBook(bookId: number, bookEditForm: NgForm){
    if(bookEditForm.valid){
      this.activeModal.dismiss();
      this.editedBook = {
        id: bookId,
        title: bookEditForm.value.bookTitle,
        author: bookEditForm.value.bookAuthor,
        cover: bookEditForm.value.bookCover,
        publishDate: bookEditForm.value.bookPublishDate
      };
      this.bookService.editBook(this.editedBook);
    } else {
      this.showFormError = true;
    }
  }
}