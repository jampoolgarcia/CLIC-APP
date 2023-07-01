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

  constructor(private auth: Auth, private _router: Router) {
	}

  ngOnInit(): void {
    console.log("currentUser:", this.auth.currentUser?.uid);
  }

  logout() {
    signOut(this.auth)
      .then(() => this._router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
