import { NgIf, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toats',
  standalone: true,
  imports: [NgbToastModule, NgIf, CommonModule],
  templateUrl: './toast.component.html',
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastComponent {

  constructor(public toastService: ToastService) {}

}
