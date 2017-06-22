import { Component } from '@angular/core';
import { LoopBackConfig } from './shared/services/lbsdk/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {

    //LoopBackConfig.setDebugMode(false);
    /*
    LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setApiVersion('api');
    LoopBackConfig.setDebugMode(true); // defaults true
    console.log('Component is Loaded');
    */
    
  }
}
