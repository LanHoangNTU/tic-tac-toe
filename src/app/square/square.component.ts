import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styles: [' button { height: var(--square-height); width: var(--square-width); font-size: 5em !important;}']
})
export class SquareComponent{

  @Input() value?: 'X' | 'O';

}
