import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  simpleObs1: Observable<any>;
  intervalObservable: Observable<any>;
  simpleObs2: Observable<any>;
  newobservable: Observable<any>;
  simpleObservableSubscription1: Subscription;
  simpleObservableSubscription2: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  obsIntervalSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    console.log('// ------ EXAMPLE 1 ------ //');


    this.simpleObs1 = Observable.create((observer: any) => {
        observer.next('Observable One is alive: ' + Date.now());
    });

    this.simpleObservableSubscription1 = this.simpleObs1.subscribe(
        (x:any) => console.log(x, 1)
    );

    this.simpleObservableSubscription2 = this.simpleObs1.subscribe(
        (x:any) => console.log(x, 2)
    );

    console.log('// ------ EXAMPLE 2 ------ //');

    this.simpleObs2 = Observable.create((observer: any) => {
        observer.next('Observer Two is alive!');
        setInterval(() => {
            observer.next('Observable Two');
        }, 2500);

        observer.next('Observer 3 is alive!');
    });

    this.subscription2 = this.simpleObs2.subscribe(
        (x:any) => console.log(x, 1)
    );

    this.subscription3 = this.simpleObs2.subscribe(
        (x:any) => console.log(x, 2)
    );


    console.log('// ------ INTERVAL ------ //');

    this.intervalObservable = interval(1000);

    this.obsIntervalSubscription = this.intervalObservable.pipe(map(val => {
    //  console.warn(val * 2)s
    return val * 2;
    })).subscribe(console.log);





    console.log('// ------ MANY SUBSCRIPTIONS ------ //');

    let counter = 1;

    this.newobservable = new Observable((observer) => { //
      observer.next(counter);
      counter++;
  });

  this.newobservable.subscribe(val => console.log(`obs1 ${val}`)); //1

  this.newobservable.subscribe(val => console.log(`obs2 ${val}`)); //1

  this.newobservable.subscribe(val => console.log(`obs2 ${val}`)); //1



    //  An Observable is cold when the producer is created and activated during subscription. This means that the subscription to this Observable is receiving all values which are emitted. There are no values which have been emitted before or will be emitted afterwards.
    //In contrast, an Observable is regarded as “hot” when the producer is either created or activated outside of the subscription. As the producer is existing before the Observable and a corresponding Subscription is created values could have been emitted before the Subscription is in place.
    ///Cold observables start running upon subscription, i.e., the observable sequence only starts pushing values to the observers when Subscribe is called. (…) This is different from hot observables such as mouse move events or stock tickers which are already producing values even before a subscription is active.
  }

}
