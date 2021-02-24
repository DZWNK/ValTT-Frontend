import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { UserManagerService } from '../user-manager.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*
  signupDisplay = "none";
  loginDisplay = "none";

  loginData: Profile;
  signupData: Profile;
*/
  constructor(private _authService: UserManagerService,
    private _router: Router) { }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }
  
  loggedIn() {
    //we want a boolean value not the token itself so double negate
    return !!localStorage.getItem('token')
  }

  ngOnInit(): void {
    /*this.loginData = {
      username: "",
      password: ""
    }

    this.signupData ={
      username: "",
      password: "",
    }*/
  }
/*
  onLoginClick(): void{
    this.loginDisplay = "block";
  }

  onSignupClick(): void{
    this.signupDisplay = "block";
  }
  */
/*
  onLoginClose(){
    this.loginDisplay = "none";
    this.loginData = {
      username: "",
      password: ""
    }
  }
*//*
  onSignupClose(): void{
    this.signupDisplay = "none";
    this.signupData = {
      username: "",
      password: ""  
    }
  }
  */
/*
  onLoginSubmit(){
    console.log("login-submit");
    // Hookup data to API for handling
    this.userManagerService.signup(this.signupData).subscribe(msg => {
      console.log(msg);
    }, err => {
      console.log(err);
    });
  }
*//*
  onSignupSubmit(){
    console.log("signup-submit");
    // Hookup data to API for handling
    this.userManagerService.login(this.loginData).subscribe(msg => {
      console.log(msg);
    }, err => {
      console.log(err);
    });
  }
  */
}
