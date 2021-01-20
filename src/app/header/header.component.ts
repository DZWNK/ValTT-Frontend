import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signupDisplay = "none";
  loginDisplay = "none";

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick(): void{
    console.log("Login Click");
    this.loginDisplay = "block";
  }

  onSignupClick(): void{
    console.log("Signup Click");
    this.signupDisplay = "block";
  }

}
