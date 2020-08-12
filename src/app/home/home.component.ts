import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputValue = 0;
  m3: any[] = [];
  m5: any[] = [];
  m7: any[] = [];
  sM3: string;
  sM5: string;
  sM7: string;
  constructor() {}

  ngOnInit() {}
  calcular(val: number) {
    this.m3 = [];
    this.m5 = [];
    this.m7 = [];
    this.sM3 = '';
    this.sM5 = '';
    this.sM7 = '';
    let i: number;
    for (i = 1; i <= val; i++) {
      if (i % 3 === 0) {
        this.m3.push(i);
        this.sM3 += i + ',';
      }
      if (i % 5 === 0) {
        if (this.m3.indexOf(i) < 0) {
          this.m5.push(i);
          this.sM5 += i + ',';
        }
      }
      if (i % 7 === 0) {
        if (this.m3.indexOf(i) < 0 && this.m5.indexOf(i) < 0) {
          this.m7.push(i);
          this.sM7 += i + ',';
        }
      }
    }
    if (this.sM3.endsWith) {
      this.sM3 = this.sM3.substring(0, this.sM3.length - 1);
    }
    if (this.sM5.endsWith) {
      this.sM5 = this.sM5.substring(0, this.sM5.length - 1);
    }
    if (this.sM7.endsWith) {
      this.sM7 = this.sM7.substring(0, this.sM7.length - 1);
    }
  }
}
