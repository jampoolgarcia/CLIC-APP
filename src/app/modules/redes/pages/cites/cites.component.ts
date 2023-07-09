// core angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from '@modules/auth/model/user';

// services
import { CitesService } from '@modules/redes/services/cites.service';
import { UserService } from '@shared/services/user.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-cites',
  templateUrl: './cites.component.html',
  styles: [
  ]
})
export class CitesComponent implements OnInit {

  $user!: Observable<any>;

  constructor(private _user: UserService,private _service: CitesService, private _router: Router) {
	}

  ngOnInit(): void {
   this.$user = this._user.currentUser;
  }

  async logout() {
    await this._service.signOut()
      .then(() => this._router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
