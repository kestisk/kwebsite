import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Hero } from './head.servises';


@Component({
  selector: 'app-head',
  template: `
  <ul>
  <li>sezer</li>
  <li *ngFor="let hero of heroes"
  [@heroState]="hero.state"
  (click)="hero.toggleState()">
{{hero.name}}
</li>
  </ul>
`,
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HeadComponent {
  @Input() heroes: Hero[];
}



