import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedesGuard implements CanActivate {
  
  constructor(private router: Router){}
  
  canActivate(){

    let user = JSON.parse(localStorage.getItem('currentUser')!) || null;

    if(user){
      if(user.rol === 'redes') return true;
    }

    this.router.navigate(['/auth']);
    return false; 
  }
  
}
