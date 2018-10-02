import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  editedBook = new Subject;
  newBook = new Subject;
  deletedBook = new Subject;
  
  constructor(private http: HttpClient) { }
  
  // CRUD Books 
  
  // Read All
  // local jason for now
  getBooks(){
    return this.http.get('./assets/data/books.json')
  } 
  // Update 
  editBook(editedBook){
    this.editedBook.next(editedBook);
  }
  // Create
  addBook(newBook){
    this.newBook.next(newBook);
  }
  // Delete
  deleteBook(deletedBook){
    this.deletedBook.next(deletedBook);
  }
  
}
