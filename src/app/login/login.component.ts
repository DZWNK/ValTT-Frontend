import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupDisplay = "none";
  loginDisplay = "none";
  
  loginData: Profile;
  signupData: Profile;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {

    this.onLoginClick();
    this.loginData = {
      username: "",
      password: ""
    }

    this.signupData ={
      username: "",
      password: "",
    }
  }

  onLoginClick(): void{
    this.loginDisplay = "block";
  }

  onLoginClose(){
    this.loginDisplay = "none";
    this.loginData = {
      username: "",
      password: ""
    }
  }

  onLoginSubmit(){
    console.log("login-submit");
    // Hookup data to API for handling
    this.userManagerService.signup(this.signupData).subscribe(msg => {
      console.log(msg);
    }, err => {
      console.log(err);
    });
  }

}
