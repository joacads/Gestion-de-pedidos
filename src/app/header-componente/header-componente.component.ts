import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-componente',
  templateUrl: './header-componente.component.html',
  styleUrls: ['./header-componente.component.css']
})
export class HeaderComponenteComponent implements OnInit {
    currentUser:any;
    constructor() {
        this.currentUser = {firstName:'Jorge',apellido:'DAngelo'};
    }

    ngOnInit() {
    }
}