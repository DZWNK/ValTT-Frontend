import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/Profile';
import { UserManagerService } from '../user-manager.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  date = new Date();  
  maxDate = (new Date().getFullYear()).toString()+"-0"+(new Date().getMonth()+1).toString()+"-"+(new Date().getDate()).toString();
  signupDisplay = "none";
  signupData: Profile;

  constructor(private userManagerService: UserManagerService,
    private _router: Router) { 
    console.log(this.maxDate)
  }

  ngOnInit(): void {
    this.onSignupClick();

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
    this._router.navigate(['/home'])
  }

  onSignupSubmit(){
    console.log("signup-submit");
    // Hookup data to API for handling
    this.userManagerService.signup(this.signupData)
    .subscribe(
      res => {
       console.log(res),
       this._router.navigate(['/login'])
      },
      err => console.log(err)
    )
  }
}
