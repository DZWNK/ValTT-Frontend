import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginProfile } from '../../models/loginProfile';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //signupDisplay = "none";
  loginDisplay = "none";
  
  loginData: loginProfile;
  //signupData: Profile;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {

    this.onLoginClick();
    this.loginData = {
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
      //email: "",
      //birthdate: "",
      password: "",
     // confirmpassword: "",
    }
  }
// is this suppose to be calling login with loginData? i changed it cause it was calling signup with signup data
// as was the signup component...
  onLoginSubmit(){
    console.log("login-submit");
    console.log(this.loginData);
    // Hookup data to API for handling
    this.userManagerService.login(this.loginData).subscribe(msg => {
      console.log(msg);
    }, err => {
      console.log(err);
    });
  }

}
