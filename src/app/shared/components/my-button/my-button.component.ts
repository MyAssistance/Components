import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button-orange',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})

export class MyButton {
  @Input() label;
}