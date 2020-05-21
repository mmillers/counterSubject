import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterSubjectService } from 'src/app/services/counterSubject.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  countervalue: number;
  arrayValue: Array<number>;

  constructor(private router: Router, private counterSubject: CounterSubjectService) { }

  ngOnInit(): void {
    this.counterSubject.value$.subscribe(
      (value) => {
        this.countervalue = value;
      });

    this.counterSubject.valueArrayNumber$.subscribe(
      (ar) => {
        this.arrayValue = ar.sort((a, b) => a - b);
      });
  }

  add() {
    this.countervalue++;
    this.counterSubject.updateArrayNumber(this.countervalue);
  }

  rem() {
    this.countervalue > 0 ? this.countervalue-- : null;
    this.counterSubject.updateArrayNumber(this.countervalue);
  }

  pageTwo() {
    this.counterSubject.valueCounter(this.countervalue);
    this.router.navigateByUrl('/two');
  }

}
