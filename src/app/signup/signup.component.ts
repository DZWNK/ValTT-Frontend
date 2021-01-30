import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { UserManagerService } from '../user-manager.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  date = new Date();  
  maxDate = (new Date().getFullYear()).toString()+"-0"+(new Date().getMonth()+1).toString()+"-"+(new Date().getDate()).toString();
  signupDisplay = "none";
  loginData: Profile;
  signupData: Profile;

  constructor(private userManagerService: UserManagerService) { 
    console.log(this.maxDate)
  }

  ngOnInit(): void {
    this.onSignupClick();
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

  onSignUp(form: NgForm) {

    console.log(form.value);

  }

  dateChange(event){
    console.log(event);
  }

  onSignupClick(): void{
    this.signupDisplay = "block";
  }

  onSignupClose(): void{
    this.signupDisplay = "none";
    this.signupData = {
      username: "",
      email: "",
      birthdate: "",
      password: "",
      confirmpassword: "",
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
