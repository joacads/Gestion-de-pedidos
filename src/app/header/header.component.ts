import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    currentUser:any;
    constructor() {
        this.currentUser = {firstName:'Jorge',apellido:'DAngelo'};
    }

    ngOnInit() {
    }
}