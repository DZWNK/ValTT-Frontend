import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserManagerService } from './user-manager.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private userManagerService: UserManagerService,
  private _router: Router) { }
//if the user is logged in (token present) returns true
//so they can continue navigating to the blocked page
  canActivate(): boolean {
    if (this.userManagerService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login'])
      return false
    }
  }
}
