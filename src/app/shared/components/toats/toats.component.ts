import { NgIf, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToatsService } from './toats.service';

@Component({
  selector: 'app-toats',
  standalone: true,
  imports: [NgbToastModule, NgIf, CommonModule],
  templateUrl: './toats.component.html',
  styleUrls: ['toats.component.scss'],
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToatsComponent {

  constructor(public toastService: ToatsService) {}

}
