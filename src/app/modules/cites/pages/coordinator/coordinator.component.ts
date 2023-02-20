import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {

  public logo = "LOGO"; 

  constructor() { }

  ngOnInit(): void {
  }

}
