import { AsyncSubject } from 'rxjs';

// en son emiit i gosterir complete i eklemek gerek

const sub = new AsyncSubject();

sub.subscribe(console.log);
sub.next(123);

sub.subscribe(console.log);

sub.next(456);
sub.complete();
