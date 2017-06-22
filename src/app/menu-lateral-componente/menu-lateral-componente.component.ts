import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-lateral-componente',
  templateUrl: './menu-lateral-componente.component.html',
  styleUrls: ['./menu-lateral-componente.component.css']
})
export class MenuLateralComponenteComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
}
