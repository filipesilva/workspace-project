import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-comp',
  template: `
    <p>
      lib works!
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
