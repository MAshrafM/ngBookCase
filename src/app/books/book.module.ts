import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { AddBookComponent } from './book/add-book/add-book.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent
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
  entryComponents: [AddBookComponent]
  
})

export class BookModule {}