import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginProfile } from '../../models/loginProfile';
import { UserManagerService } from '../user-manager.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDisplay = "none";
  loginData: loginProfile;

  constructor(private userManagerService: UserManagerService,
    private _router: Router) { }

  ngOnInit(): void {
    this.onLoginClick();

    this.loginData = {
      login: "",
      password: "",
    }
  }

  onLoginClick(): void{
    this.loginDisplay = "block";
  }

  onLoginClose(){
    this.loginDisplay = "none";
    this.loginData = {
      login: "",
      password: "",
    }
    this._router.navigate(['/home'])
  }

  onLoginSubmit(){
    console.log("login-submit");
    // Hookup data to API for handling
      this.userManagerService.login(this.loginData)
        .subscribe(
          /* once server responds with token it saves in local storage
          this._router.navigate(['/event/:id']); // this is for jwt, once successful login happens it navigates
          to a locked page which is only accessible to logged in users (route guarding)*/
          res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/favourites'])
        }, 
      err => console.log(err)
    )
  }
}
