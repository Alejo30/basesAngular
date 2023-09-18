import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p>Contador: {{counter}}</p>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetBy(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    
    
    `
})

export class CounterComponent implements OnInit {
    constructor() { }

    counter = 0;

  increaseBy(value: number):void {
    this.counter +=value
  }

  resetBy(value:number):void {
    this.counter = value
  }

    ngOnInit() { }
}