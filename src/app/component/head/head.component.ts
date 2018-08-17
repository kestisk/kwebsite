import { MainpageComponent } from './../../mainpage/mainpage.component';
import { Component, OnInit, Output, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';






@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]

})
export class HeadComponent {
  skshow = true;
  closeResult: string;
  public state = 'active';
  sezer: String = "sk";
  repeatCount = 0;
  repeatItem = null;
  public sk: string = "sezer";
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
    this.toggle2();

  }
  openVerticallyCentered(content) {
    debugger;
    this.modalService.open(content, { centered: true });
  }
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  close() {
    this.skshow = false;

  }
  name = 'dizi';
  dizi = [{ text: 'b' }, { text: 'e' }, { text: 'r' }, { text: 'k' }, { text: 'a' }, { text: 'y' }];
  mydizi = [{ text: '' }]
  adddizim(at: string) {
    const sk = {
      text: at,
    };
    this.mydizi.push(sk)
  }


  public toggleState() {
    // this.mydizi[this.repeatCount].text = this.dizi[this.repeatCount].text;
    this.adddizim(this.dizi[this.repeatCount].text);

    // this.sezer = at.toString();
    // this.state = this.state === 'active' ? 'void' : 'active';

    this.state = this.state === 'active' ? 'at' : 'active';
    this.repeatItem = setInterval(() => {

      this.repeatCount++;
      // this.mydizi[this.repeatCount].text = this.dizi[this.repeatCount].text;
      this.adddizim(this.dizi[this.repeatCount].text);

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






