import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { List } from '@core/list';
import { ConfirmationI } from '@modules/cites/model/confirmation';
import { ConfirmationService } from '@modules/cites/services/confirmation.service';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

const test = [ 'Mark', 'Jacob', 'Larry the Bird', 'Larry', 'the Bird'];

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  imports: [NgbPaginationModule, CommonModule],
  providers: [NgbModalConfig, NgbModal],
})
export class ConfirmationComponent extends List implements OnInit {

  public confirmations$!: Observable<ConfirmationI[]>;
	public confirmations = test;

  constructor(public activeModal: NgbActiveModal,
              private _modalService: NgbModal,
              private _service: ConfirmationService) {
		super();
    
	}
  ngOnInit(): void {
    this.confirmations$ = this._service.getAll();
  }

  open(content:any) {
		this._modalService.open(content);
	}

}
