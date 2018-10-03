import { Component, Input } from '@angular/core';;
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { BookService } from '../../book.service';
import { Book } from '../../book.model';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})

export class DeleteBookComponent{
  @Input() book: Book;


  constructor(private bookService: BookService, public activeModal: NgbActiveModal) {}


  onDeleteBook(bookId: string){     
    this.bookService.deleteBook(bookId);
    this.activeModal.dismiss();
  }
}