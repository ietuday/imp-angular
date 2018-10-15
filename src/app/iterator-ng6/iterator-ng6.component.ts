import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterator-ng6',
  templateUrl: './iterator-ng6.component.html',
  styleUrls: ['./iterator-ng6.component.scss']
})
export class IteratorNg6Component implements OnInit {
  letters:any;
  constructor() { 
      this.letters = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3,
        [Symbol.iterator]() {
          let index = 0;
          return {
              next: () => {
                  let value = this[index];
                  let done = index >= this.length;
                  index++;
                  return { value, done };
              }
          };
        }
      };
    }

  ngOnInit() {
  }

}
