import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, zip } from 'rxjs';
import { mergeMap, map, reduce } from 'rxjs/operators';
import { BooksIds, AuthorInfo, BookDetails, BookInfo } from 'src/app/models/index';

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
  result: any;

  constructor() { }

  ngOnInit() {

  function getBooksIds$(): Observable<BooksIds[]> {
    return  new Observable(observer => {
      const booksArray: BooksIds[] = [
        {code: '123'},
        {code: '456'},
        {code: '789'}
      ];

      observer.next(booksArray);

      // observer.error('books error');
      observer.complete();
    });
  }

  function getAuthorByBookCode$(code: string): Observable<AuthorInfo> {
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

      observer.complete();
    });

  }

  function getBookDetails$(code): Observable<BookDetails> {
    console.log('getAuthorByBookCode', code);

    return  new Observable(observer => {
      let bookDetails;

        if (code === '123') {
          bookDetails = { year: 2000, type: 'novel', title: 'The Spirits House' };
          observer.next(bookDetails);
        }

        if (code === '456') {
          bookDetails = bookDetails = { year: 2000, type: 'novel', title: 'Atonement' };
          observer.next(bookDetails);
        }

        if (code === '789') {
          bookDetails = bookDetails = { year: 2000, type: 'novel', title: 'Miedzianka' };
          observer.next(bookDetails);
        }

        observer.complete();



    });
  }

  // this.booksIds = getBooksIds$()
  // .subscribe(data => {
  //   console.log('booksIds', data);
  //   this.output = data;
  // });

  function getAuthors$(): Observable<BooksIds> {
    return getBooksIds$()
    .pipe(
      mergeMap(book => book)
    );
  }

  function getBooksInfo$(): Observable<BookInfo[]> {
    return getAuthors$().pipe(mergeMap(book =>
      zip(getAuthorByBookCode$(book.code),
        getBookDetails$(book.code))
        .pipe(map(([author, books]) => {

          return {
            code: book.code,
            author: {
              ...author
            },
            ...books
          };
        }),
      )
      ),
      reduce((acc: BookInfo[], nextBook) => {
        return acc.concat(nextBook);
      }, [])
    );
  }

  getBooksInfo$().subscribe(item => console.log('result', item));

}
}
