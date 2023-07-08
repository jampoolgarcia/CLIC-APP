// angular core
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';

// services
import { UserService } from '@shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: UserService, private _router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this._auth.currentUser.pipe(
      filter(val => val !== null),
      take(1),
      map((isAuthenticated) => {
        //console.log('isAuthenticated:', isAuthenticated);
        if(!isAuthenticated || (isAuthenticated.hasOwnProperty('user') && !isAuthenticated.user) ) return this._router.createUrlTree(['/auth/sing-in']);
        // console.log('Guard auth')
        else  return true;
        // console.log('isAuthenticated');
        
      })
    );
  }
  
}
