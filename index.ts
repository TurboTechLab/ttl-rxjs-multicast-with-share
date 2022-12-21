import { interval, Subject } from 'rxjs';
import { share, take, tap } from 'rxjs/operators';

const source = interval(1000).pipe(
  take(2),
  tap((x) => console.log('Emits: ', x)),

  //Comment share to see the difference in the output
  share({ connector: () => new Subject() })
);

//Note : Mark the comma between subscriptions
source.subscribe((v) => console.log('subscription 1: ', v)),
  source.subscribe((v) => console.log('subscription 2: ', v));
