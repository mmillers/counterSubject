import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterSubjectService {

    counter: Subject<number> = new BehaviorSubject(0);
    value$ = this.counter.asObservable();

    arrayNumber: Subject<Array<number>> = new BehaviorSubject([]);
    valueArrayNumber$ = this.arrayNumber.asObservable();

    constructor() { }

    valueCounter(value) {
        this.counter.next(value);
    }

    updateArrayNumber(value) {
        this.showLastTen(value);
    }

    showLastTen(value) {
        const limit = value > 10 ? value - 10 : 0;
        let numbers = new Array<number>();

        for (let index = value; index >= limit; index--) {
            numbers.push(index);
        }
        this.arrayNumber.next(numbers);
    }
}