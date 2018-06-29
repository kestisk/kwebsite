import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Transform } from 'stream';



@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({ transform: 'translateX(0) scale(1)' })),
      state('active', style({ transform: 'translateX(0) scale(0.9)' })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('at => inactive', [
        style({ transform: 'translateX(-100%) scale(1)' }),
        animate(100)
      ]),
      transition('inactive => at', [
        animate(100, style({ transform: 'translateX(100%) scale(1)' }))
      ]),
      transition('at => active', [
        style({ transform: 'translateX(0) translateY(100%) scale(0)' }),
        animate(200)
      ]),
      transition('active => at', [
        animate(200, style({ transform: 'translateX(0) scale(0)' }))
      ])
    ])
  ]
})
export class HeadComponent {
  public state = 'active';
  sezer: String = "sk";
  repeatCount = 1;
  repeatItem = null;
  ngOnInit() {
    this.toggle2();
  }
  dizi = [{ text: 's' }, { text: "e" }, { text: "z" }, { text: "e" }, { text: "r" }, { text: "K" }]
  public toggleState() {


    // this.sezer = at.toString();
    // this.state = this.state === 'active' ? 'void' : 'active';

    this.state = this.state === 'active' ? 'at' : 'active';
    this.repeatItem = setInterval(() => {
      this.repeatCount++;
      this.state = this.state === 'active' ? 'at' : 'active';
      if (this.repeatCount > 4) {
        clearInterval(this.repeatItem);
        this.repeatItem = null;
      }
      // this.toggle2();
    }, 1500);


  }
  toggle2() {
    //  this.toggleState();
    if (this.repeatItem == null) {
      this.toggleState();
    }
    else {
      clearInterval(this.repeatItem);
      this.repeatItem = null;
    }
  }



}






