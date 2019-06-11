import { Component, OnInit } from '@angular/core';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

        // MAP, MERGE MAP, SWITCH MAP
    const source1 = of('World').pipe(
      map(x => `Hello ${x}!`)
    );

    const source2 = of('World').pipe(
      mergeMap(x => `Hello ${x}!`)
    );

    const source3 = of('World').pipe(
      switchMap(x => `Hello ${x}!`)
    );

    source1.subscribe(x => console.log(x));
    source2.subscribe(x => console.log(x));
    source3.subscribe(x => console.log(x));

  }

}
