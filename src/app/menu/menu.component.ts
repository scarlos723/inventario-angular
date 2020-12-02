import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userNav:any;
  constructor() { }

  ngOnInit(): void {
    
    let user = localStorage.getItem('user');
    if(user!==null){
      this.userNav=JSON.parse(user);
    }
  }

}
