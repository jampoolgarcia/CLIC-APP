// core angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// firebase
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-cites',
  templateUrl: './cites.component.html',
  styles: [
  ]
})
export class CitesComponent implements OnInit {

  constructor(private _auth: Auth, private _router: Router) {
	}

  ngOnInit(): void {
    
  }

  async logout() {
    await signOut(this._auth)
      .then(() => this._router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
