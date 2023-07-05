// core angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { CitesService } from '@modules/redes/services/cites.service';


@Component({
  selector: 'app-cites',
  templateUrl: './cites.component.html',
  styles: [
  ]
})
export class CitesComponent implements OnInit {

  constructor(private _service: CitesService, private _router: Router) {
	}

  ngOnInit(): void {
    
  }

  async logout() {
    await this._service.signOut()
      .then(() => this._router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }

}
