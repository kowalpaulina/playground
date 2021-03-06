import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  items = [
    {
      name: 'rxjs basics',
      link: 'rxjs/basics'
    },
    {
      name: 'rxjs operators',
      link: 'rxjs/operators'
    },
    {
      name: 'rxjs books',
      link: 'rxjs/books'
    },
    {
      name: 'forms',
      link: 'forms'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
