// core
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.scss']
})
export class RedesComponent implements OnInit {


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
