import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { BooksIds, AuthorInfo } from 'src/app/models/index';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  booksIds: Subscription;
  authorsList: Subscription;
  output: BooksIds[];
  author: any;
  authorsFinalList: any;

  constructor() { }

  ngOnInit() {

  function getBooksIds(): Observable<BooksIds[]> {
    return  new Observable(observer => {
      const booksArray: BooksIds[] = [
        {code: '123'},
        {code: '456'},
        {code: '789'}
      ];

      observer.next(booksArray);
      // observer.next({code: '789'});
      // observer.next({code: '123'});
      // observer.next({code: '456'});

      observer.error('books error');
      observer.complete();
    });
  }

  function getAuthorByBookCode(code: string): Observable<AuthorInfo> {
    console.log('getAuthorByBookCode', code);
    return  new Observable(observer => {
      let author;

      if (code === '123') {
        author = {name: 'Isabel', lastName: 'Allende', country: 'Chile'};
        observer.next(author);
      }

      if (code === '456') {
        author = {name: 'Ian', lastName: 'McEwan', country: 'England'};
        observer.next(author);
      }

      if (code === '789') {
        author = {name: 'Filip', lastName: 'Springer', country: 'Poland'};
        observer.next(author);
      }
    });
  }

  this.booksIds = getBooksIds()
  .subscribe(data => {
    console.log(data);
    this.output = data;
  });



  this.authorsList = getBooksIds()
  .pipe(
    mergeMap(book => book),
    mergeMap(book => getAuthorByBookCode(book.code)))
    .subscribe(data => {
      console.log('authorsList', data);
    });
  }

}
