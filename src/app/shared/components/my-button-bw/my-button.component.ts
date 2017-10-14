import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button-bw',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})

export class MyButtonBW {
  @Input() label;
}