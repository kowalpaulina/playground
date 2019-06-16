import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items = [
    {
      name: 'basics',
      link: 'rxjs/basics'
    },
    {
      name: 'operators',
      link: 'rxjs/operators'
    },
    {
      name: 'books',
      link: 'rxjs/books'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
