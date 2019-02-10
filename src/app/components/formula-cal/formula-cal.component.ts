import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula-cal',
  templateUrl: './formula-cal.component.html',
  styleUrls: ['./formula-cal.component.css']
})
export class FormulaCalComponent implements OnInit {

  constructor() { }
  result = '';
  ngOnInit() {
  }
  async calculate(formula) {
    this.result = '';
    try {
      await this.delay(1000);
      const result = this.getResult(formula);
      this.result = result ? result.toString() : 'NAN';
    } catch (e) {
      this.result = 'Please check expression you have entered';
    }
  }
  delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
  getResult(formula) {
    return new Function('return ' + formula)();
  }
}
