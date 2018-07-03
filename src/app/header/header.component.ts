import { Component, OnInit } from '@angular/core';
import { SingletonService } from '../shared/services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser:any;
    constructor() {
    }

    ngOnInit() {
    }

    cerrarSesion() {
      
    }
}