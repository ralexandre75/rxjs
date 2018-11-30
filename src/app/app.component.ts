import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    const obs = Observable.create((observer: Observer<any>) => {
      observer.next(1);
      observer.next(2);
      setTimeout(function(){
        observer.next(42);
        observer.complete();
        observer.error("error");
        observer.next(24);
      }, 3000);
    })

  //  const sub: Subscription = obs.subscribe({
  //    next: x => console.log(x),
  //    complete: () => console.log("complete"),
  //    error: x => console.log(x)
  //  })

    const sub: Subscription = obs.subscribe( x => { 
      console.log(x);
    })

    
  }

  
}
