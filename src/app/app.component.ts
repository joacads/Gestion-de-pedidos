import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/services/lbsdk/index';
import { SingletonService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ua = navigator.userAgent;

  constructor( private singletonService: SingletonService ) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(this.ua)) {
      this.singletonService.isMobile = true;
      console.log("MOBILE");
    } else if (/Chrome/i.test(this.ua)) {
      this.singletonService.isMobile = false;
      console.log("DESKTOP");
    }
  }
}