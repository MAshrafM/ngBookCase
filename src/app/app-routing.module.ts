import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
