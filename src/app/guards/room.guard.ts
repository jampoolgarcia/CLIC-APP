import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomGuard implements CanActivate {
  
  constructor(private router: Router){}
  
  canActivate(){

    let user = JSON.parse(localStorage.getItem('currentUser')!) || null;

    if(user){
      if(user.rol === 'salon') return true;
    }

    this.router.navigate(['/auth']);
    return false; 
  }
  
}
