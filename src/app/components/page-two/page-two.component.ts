import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterSubjectService } from 'src/app/services/counterSubject.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  countervalue: number;
  desc: string;
  view: boolean;

  arrayValue: Array<number>;


  constructor(private route: Router, private counterSubject: CounterSubjectService) { }

  ngOnInit(): void {
    this.counterSubject.value$.subscribe(
      (value) => {
        this.countervalue = value;
        this.countervalue ? this.desc = this.checkNumber() : null;
      });

    this.counterSubject.valueArrayNumber$.subscribe(
      (ar) => {
        this.arrayValue = ar.sort((a, b) => a - b);
      });
  }

  checkNumber(): string {
    const result3 = this.countervalue % 3;
    const result5 = this.countervalue % 5;

    if (result3 === 0 && result5 === 0)
      return 'fizzbuzz'
    if (result3 === 0)
      return 'fizz';
    else if (result5 === 0)
      return 'buzz';
    else return null;
  }

  back() {
    this.route.navigateByUrl('/');
  }

}
