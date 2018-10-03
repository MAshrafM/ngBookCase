import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  exports: [
    BooksComponent
  ],
  entryComponents: [AddBookComponent, EditBookComponent]
  
})

export class BookModule {}