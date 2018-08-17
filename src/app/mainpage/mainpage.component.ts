
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition

} from '@angular/animations';
import 'rxjs/add/observable/fromEvent';





@Component({
  selector: 'app-mainpage',

  templateUrl: './mainpage.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./mainpage.component.css'],
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
  ],
})
export class MainpageComponent implements OnInit {
  public bluu = 'blu';
  isbluVisible = false;
  isblu2Visible = true;
  skshow = true;
  closeResult: string;
  public state = 'active';
  sezer: String = "sk";
  repeatCount = 0;
  repeatItem = null;
  public sk: string = "sezer";
  constructor() { }

  ngOnInit() {
    this.toggle2();
  }

  name = 'dizi';
  uyari = "";
  dizi = [{ text: '' }, { text: 'k' }, { text: 'ü' }, { text: 's' }, { text: 'u' }, { text: 'r' }, { text: '-' }, { text: 'a' }, { text: 't' }];
  mydizi = [{ text: '' }]
  adddizim(at: string) {
    const sk = {
      text: at,
    };
    this.mydizi.push(sk)
  }
  open() {
    this.bluu = 'blu';
    this.skshow = true;
  }
  close() {
    this.skshow = false;
    debugger;
    this.bluu = '';
  }
  konumbul($event) {
    console.log($event.pageY);
    if ($event.pageY < 20) {
      this.bluu = 'blu';
      this.skshow = true;
    }
  }


  public toggleState() {
    // this.mydizi[this.repeatCount].text = this.dizi[this.repeatCount].text;
    this.adddizim(this.dizi[this.repeatCount].text);

    // this.sezer = at.toString();
    // this.state = this.state === 'active' ? 'void' : 'active';

    this.state = this.state === 'at' ? 'inactive' : 'at';
    this.repeatItem = setInterval(() => {

      this.repeatCount++;
      // this.mydizi[this.repeatCount].text = this.dizi[this.repeatCount].text;
      this.adddizim(this.dizi[this.repeatCount].text);

      this.state = this.state === 'at' ? 'inactive' : 'at';
      if (this.repeatCount > 7) {
        clearInterval(this.repeatItem);
        this.repeatItem = null;
      }
      // this.toggle2();
    }, 500);

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


