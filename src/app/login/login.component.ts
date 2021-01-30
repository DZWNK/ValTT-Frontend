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
      email: "",
      birthdate: "",
      password: "",
      confirmpassword: "",
    }

    this.signupData ={
      username: "",
      email: "",
      birthdate: "",
      password: "",
      confirmpassword: "",
    }
  }

  onLoginClick(): void{
    this.loginDisplay = "block";
  }

  onLoginClose(){
    this.loginDisplay = "none";
    this.loginData = {
      username: "",
      email: "",
      birthdate: "",
      password: "",
      confirmpassword: "",
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
