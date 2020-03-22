import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  buttonClicked = false;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.buttonClicked = !this.buttonClicked;
    this.clicks.push(this.clicks.length + 1);
  }

}
