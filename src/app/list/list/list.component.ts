import { ConfirmModalComponent } from './../confirm-modal/confirm-modal.component';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { UserModel } from './../../models/user.model';
import { ListService } from './../../services/list-service/list.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(UserModalComponent) private userModal: UserModalComponent;
  @ViewChild(ConfirmModalComponent) private confirmModal: ConfirmModalComponent;

  public users: UserModel[];

  public firstName = '';
  public lastName = '';
  public email = '';

  public errorOccurred = false;

  constructor(
    private readonly listService: ListService
  ) { }

  ngOnInit(): void {
    this.listService.getUsers().subscribe(
      response => this.users = response,
      () => this.errorOccurred = true
    );
  }

  public addUser(): void {
    this.userModal.openModal().subscribe(
      result => {
        this.users.push(result);
      }
    );
  }

  public deleteUser(user: UserModel): void {
    this.confirmModal.openModal(user).subscribe(
      result => {
        if (result) {
          this.listService.deleteUser(user).subscribe(
            () => {
              this.users.splice(this.users.findIndex(element => element.id === user.id), 1);
            }
          );
        }
      }
    );
  }

  public editUser(user: UserModel): void {
    this.userModal.openModal('edit', user).subscribe(
      result => {
        this.users[this.users.findIndex(element => element.id === user.id)] = result;
      }
    );
  }
}
