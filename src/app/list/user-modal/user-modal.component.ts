import { ListService } from './../../services/list-service/list.service';
import { UserModel } from '../../models/user.model';
import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnDestroy {

  @ViewChild('userForm') private userForm: HTMLFormElement;

  private editUser: UserModel;
  private savedData: Subject<UserModel>;

  public mode: 'add' | 'edit' = 'add';

  public firstName = '';
  public lastName = '';
  public email = '';

  public operationPending = false;
  public errorMessage = '';

  constructor(
    private readonly listService: ListService
  ) { }

  public openModal(mode: 'add' | 'edit' = 'add', user?: UserModel): Observable<UserModel> {

    this.userForm.resetForm();

    this.mode = mode;
    this.editUser = user;

    this.savedData = new Subject<UserModel>();

    if (mode === 'edit') {
      this.firstName = user.first_name || '';
      this.lastName = user.last_name || '';
      this.email = user.email || '';
    } else {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    }

    $('#userModal').modal('show');

    return this.savedData.asObservable();
  }

  public onSubmit(): void {
    const user: UserModel = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email
    };
    if (this.mode === 'edit') {
      user.avatar = this.editUser.avatar;
      user.id = this.editUser.id;
    }

    const finalize = () => {
      this.operationPending = false;
      this.savedData.next(user);
      this.savedData.complete();
      $('#userModal').modal('hide');
    };

    const atError = () => {
      this.operationPending = false;
      this.errorMessage = 'Error! Try again';
    };

    switch (this.mode) {
      case 'add':
        this.operationPending = true;
        this.listService.addUser(user).subscribe(
          () => finalize(),
          () => atError()
        );
        break;
      case 'edit':
        this.operationPending = true;
        this.listService.editUser(user).subscribe(
          () => finalize(),
          () => atError()
        );
        break;
    }
  }

  ngOnDestroy(): void {
    if (this.savedData) { this.savedData.complete(); }
  }
}
