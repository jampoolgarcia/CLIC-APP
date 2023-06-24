import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const test = [ 'Mark', 'Jacob', 'Larry the Bird', 'Larry', 'the Bird'];

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  imports: [NgbPaginationModule, CommonModule],
  providers: [NgbModalConfig, NgbModal],
})
export class ConfirmationComponent {

	public confirmations = test;
  public page = 1;
	public pageSize = 3;

  constructor(public activeModal: NgbActiveModal,
    private _modalService: NgbModal) {
		
	}

  open(content:any) {
		this._modalService.open(content);
	}

}
