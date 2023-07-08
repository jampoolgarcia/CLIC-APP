// angular core
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, filter, map, take } from 'rxjs';

// services
import { AuthService } from '@modules/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this._auth.currentUser.pipe(
      filter(val => val !== null),
      take(1),
      map((isAuthenticated) => {
        //console.log('isAuthenticated:', isAuthenticated);
        if(isAuthenticated){
         // console.log('isAuthenticated');
          return true;
        } 
        else  {
         // console.log('Guard auth')
          return this._router.createUrlTree(['/auth/sing-in']);
        }
      })
    );
  }
  
}
