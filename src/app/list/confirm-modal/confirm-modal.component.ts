import { Observable, Subject } from 'rxjs';
import { UserModel } from './../../models/user.model';
import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  private result: Subject<boolean>;
  public user: UserModel;

  public openModal(user: UserModel): Observable<boolean> {
    this.user = user;
    this.result = new Subject<boolean>();

    $('#confirmModal').modal('show');
    $('#confirmModal').on('hide.bs.modal', () => {
      if (!this.result.isStopped) {
        this.result.next(false);
        this.result.complete();
      }
    });

    return this.result.asObservable();
  }

  public confirm(): void {
    this.result.next(true);
    this.result.complete();
    $('#confirmModal').modal('hide');
  }

}
