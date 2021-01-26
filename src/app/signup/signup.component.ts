import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  

  signupDisplay = "none";
  loginData: Profile;
  signupData: Profile;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(): void {
    this.onSignupClick();
    this.loginData = {
      username: "",
      password: ""
    }

    this.signupData ={
      username: "",
      password: "",
    }
  }

  onSignupClick(): void{
    this.signupDisplay = "block";
  }

  onSignupClose(): void{
    this.signupDisplay = "none";
    this.signupData = {
      username: "",
      password: ""  
    }
  }

  onSignupSubmit(){
    console.log("signup-submit");
    // Hookup data to API for handling
    this.userManagerService.login(this.loginData).subscribe(msg => {
      console.log(msg);
    }, err => {
      console.log(err);
    });
  }
}
